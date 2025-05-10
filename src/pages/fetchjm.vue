<template>
    <div class="top-container">
        <!-- <button @click="fetchArtwork">获取 Pixiv 作品</button> -->
        <br>
        <div id="input-box">
            <el-input v-model="inputNumber" placeholder="请输入数字" @keyup.enter="fetchJMComic"
                style="width: 200px;left: 40vw;position: relative" />
            <el-button type="primary" @click="fetchJMComic" style="position: relative;left:40vw;">GET</el-button>
        </div>
        <div class="folder-list">
            <div id="folder-title"><el-button type="text" @click="switchDefaultFolder()"> 全部 </el-button> <button id="folder-title-button" @click="expandFolderList()"> 展开 </button> </div>
            <div v-show="isExpand" class="folder-item">
                <div v-for="(value, path) in folderMap"> <el-button type="text"
                        @click="switchFolder((path as string))">{{ path }} </el-button></div>
            </div>
        </div>
    </div>

    <body>
        <ShowGallery :imgsPath="targetImg" />
    </body>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import ShowGallery from '@/components/ShowGallery.vue';

var data = ref(null);
const inputNumber = ref('')

const fetchJMComic = async (): Promise<void> => {
    try {
        const response = await axios.post(
            'http://localhost:5000/run-script',
            { number: inputNumber.value },  // 发送JSON数据
            {
                headers: {
                    'Content-Type': 'application/json'  // 明确指定JSON格式
                }
            }
        )
        data.value = response.data;
    } catch (error) {
        alert(`需要启动后端程序！\nFailed to fetch artwork:' ${error}`);
    }
}

const images = import.meta.glob("@/getjm/out/**")
const allImg: string[] = Object.keys(images)

interface FolderMap {
    [key: string]: any[];
}

const folderMap: FolderMap = {};

Object.entries((images as object)).forEach(([path, module]) => {
    // 提取文件夹名（如 'cats'）
    const folderPath = path.split('/').slice(4)
    const folderName = folderPath[0]; // 根据路径结构调整索引
    if (!folderMap[folderName]) {
        folderMap[folderName] = [];
    }
    folderMap[folderName].push(path);
});

const targetFolder = ref<string>('');
var targetImg = ref<string[]>([]);

function switchFolder(folderName: string) {
    targetFolder.value = folderName;
    targetImg.value = folderMap[folderName];
    console.log('img:', targetImg.value)
}

function switchDefaultFolder() {
    targetFolder.value = '';
    targetImg.value = allImg;
    console.log('img:', targetImg.value)
}

var isExpand = ref(false)

function expandFolderList(this: any) {
    isExpand.value = !isExpand.value;
    (document.getElementById('folder-title-button') as HTMLElement).innerHTML = isExpand.value ? '收起' : '展开';
    if (isExpand.value) {
        const folderTitlePos = document.getElementById('folder-title')?.getBoundingClientRect().top as number
        document.getElementsByClassName('folder-item')[0].setAttribute('style', `top:${folderTitlePos}px`)
    } //设置列表渲染位置

}

</script>


<style scoped>
.top-container {
    display: flex;
    flex-direction: column;

}

#input-box {
    border-radius: 5px;
    flex-direction: row;
    justify-items: center;
}

.folder-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5px;
    margin-left: 10px;
    max-width: 20vw;
}

/* #folder-title {

} */

.folder-item {
    background-color: rgba(15, 1, 16, 0.8);
    position: absolute;
    z-index: 5;
    box-shadow: 0px 5px 10px;
    border-radius: 10px;
}
</style>