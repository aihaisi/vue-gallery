<template>

    <head>
        <title>个人相册</title>
    </head>
    
    <VueEasyLightbox :imgs="imgsPath" :visible="isShowBigImg" :index="targetIndex" @hide="hideBigImg()"
    :zoomScale="1.3" class="light-box"/>

    <body id="show">
        <hr>
        <div id="arrowTop" v-show="isShowBackToTop" @click="backToTop">返回顶部</div>
        <div class="img-container" id="container">
            <div v-for="(pic, index) in imgsPath" :key="index" class="img-div">
                <img :src="pic" class="img-small" @click="showBigImg(index)" alt="单击图片查看大图" />
            </div>
        </div>
    </body>

</template>
<script lang='ts' setup>
import { onMounted, onUnmounted ,ref, type Ref } from 'vue'
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

function overflowHidden() {
   
}

function overflowVisible() {

}

function showBigImg(index: number) {
    isShowBigImg.value = true
    targetIndex.value = index
    overflowHidden()
}

function hideBigImg() {
    isShowBigImg.value = false
    overflowVisible()
}

function backToTop() {
    window.scrollTo({ top: pageXOffset, left: pageYOffset, behavior:'smooth' });
    // after scrollTo, there will be a "scroll" event, so the arrow will hide automatically
};

let isShowBackToTop = ref(false)


function showBackToTop() {
    if (window.scrollY > document.documentElement.clientHeight) {
        isShowBackToTop.value = true
    }
    else {
        isShowBackToTop.value = false
    };
}

var show: any = ref(null);

onMounted(() => {
    window.addEventListener('scroll', showBackToTop);
});


onUnmounted(() => {
    window.removeEventListener('scroll', showBackToTop);
})


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
    overflow: visible;

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

#arrowTop {
    display: flex;
    color: black;
    font-size: 16px;
    position: fixed;
    padding: 4px;
    border-radius: 10px;
    top: 50px;
    left: 10px;
    cursor: pointer;
    z-index: 5;
    background-color: aliceblue;
    box-shadow: 0 0 5px;
    transition: all 0.3s ease;

}

/* #arrowTop::before {
    content: '▲';
    height:36px;
    width:40px;
} */

/* .light-box {
    z-index: 100;
}  */
</style>