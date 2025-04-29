<template>

    <head>
        <title>个人相册</title>
    </head>



    <body id="show">
        <hr>
        
        <div class="img-container" id="container">
            <div v-for="(pic, index) in imgsPath" :key="index" class="img-div">
                <img :src="pic" class="img-small" @click="showBigImg(index)" alt="单击图片查看大图" />
            </div>
             <!--占位元素，防止样式布局因为放大图的展开而改变-->
      
        </div>
        <VueEasyLightbox :imgs="imgsPath" :visible="isShowBigImg" :index="targetIndex" @hide="hideBigImg()"
        :zoomScale="1.1" class="light-box" :scrollDisabled="true" />
    </body>
    <el-backtop :right="60" :bottom="60" type="primary" style="color: purple;background-color: whitesmoke;" />
</template>
<script lang='ts' setup>
import { ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'
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
let isPlaceholderVisible = ref(false)

function showBigImg(index: number) {
    adjustContainerMarginRight(true)
    isShowBigImg.value = true
    targetIndex.value = index

}

function hideBigImg() {
    adjustContainerMarginRight(false)
    isShowBigImg.value = false
}

const scrollbarWidth = getScrollbarWidth()

function getScrollbarWidth(): number {
    // 创建一个临时的 div 元素
    const div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.overflow = 'scroll'; // 强制显示滚动条
    div.style.position = 'absolute';
    div.style.top = '-9999px'; // 将元素移出视图

    // 添加到文档中
    document.body.appendChild(div);

    // 滚动条宽度 = 元素的总宽度 - 内容宽度
    const scrollbarWidth = div.offsetWidth - div.clientWidth;

    // 移除临时元素
    document.body.removeChild(div);

    return scrollbarWidth;
}

//在显示大图时，调整容器的margin-right，防止原底层图片布局发生改变
function adjustContainerMarginRight(isBigImgVisible: boolean) {
    const container = document.getElementById('container')
    if (container) {
        container.style.marginRight = isBigImgVisible ? scrollbarWidth.toString() + 'px' : '0px' 
    }
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
    overflow-y: hidden;
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
    /* align-items: center; */
    max-width: 100%;
    height: 100%;
    margin: 0px;
    /* 水平方向居中 */
    /* margin: 0 auto; */
    /* justify-content: center; */
}

.light-box {
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
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