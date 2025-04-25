<template>

    <head>
        <title>个人相册</title>
    </head>

    <VueEasyLightbox :imgs="imgsPath" :visible="isShowBigImg" :index="targetIndex" @hide="hideBigImg()" :zoomScale="1.3"
        class="light-box" />

    <body id="show">
        <hr>
        <div class="img-container" id="container">
            <div v-for="(pic, index) in imgsPath" :key="index" class="img-div">
                <img :src="pic" class="img-small" @click="showBigImg(index)" alt="单击图片查看大图" />
            </div>
        </div>
    </body>
    <el-backtop :right="60" :bottom="60" type="primary" style="color: purple;background-color: whitesmoke;" />
</template>
<script lang='ts' setup>
import { onMounted, onUnmounted, ref, type Ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'
import emitter from '@/tools/emitter'
import { isRandomSortPic } from '@/tools/emitter'


const { imgsPath } = defineProps(
    {
        imgsPath: { type: Array<string>, required: true },
    }
)

// 判断是否需要随机排序
if (isRandomSortPic.value) {
    imgsPath.sort(function () {
        return (Math.random() - 0.5)
    })
}

let isShowBigImg = ref(false)
let targetIndex = ref()

function showBigImg(index: number) {
    isShowBigImg.value = true
    targetIndex.value = index
}

function hideBigImg() {
    isShowBigImg.value = false
}

</script>

<style scoped>
* {
    color: aliceblue;
}

body {
    text-align: center;
    margin: 0px;
    /* display: flex;
    flex-wrap: wrap; */
    overflow: visible;
    overflow-x: hidden;
    min-width: 100%;
    width: 100%;
}

.img-container {
    position: relative;
    display: flex;
    /* 弹性布局 */
    flex-wrap: wrap;
    /* 自动换行 */
    justify-content: center;
    /* 垂直方向居中 */
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0px;
    /* 水平方向居中 */
    /* margin: 0 auto; */
    /* justify-content: center; */
    /* align-items: center; */
}

.img-div {
    margin: 0 auto;
    /* border: 0px solid #8397a0; */
    border-radius: 10px;
    max-width: 45vw;
}

.img-small {
    max-height: 384px;
    /* max-width: 125%; */
    border: 0;
    border-radius: 10px;
    box-shadow: -5px 5px 5px 2px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;

}

.img-small:hover {
    cursor: pointer;
    scale: 1.2;

}

</style>