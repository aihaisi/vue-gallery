<template>

    <head>
        <title>个人相册</title>
    </head>

    <body>
        <hr>

      <VueEasyLightbox :imgs="imgsPath" :visible="isShowBigImg" :index="targetIndex" @hide="isShowBigImg = false"/>

        <div class="img-container">
            <div v-for="(pic, index) in imgsPath" :key="index" class="img-div">
                <img :src="pic" class="img-small" @click="showBigImg(index)" alt="单击图片查看大图" />
            </div>
        </div>

    </body>
</template>
<script lang='ts' setup>
import {ref} from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

const props = defineProps(["imgsPath"])

const imgsPath = props.imgsPath

imgsPath.sort(function () {
    return (Math.random() - 0.5)
})

let isShowBigImg = ref(false)
let targetIndex = ref()

function showBigImg(index:number) {
    isShowBigImg.value = true
    targetIndex.value = index
}

</script>

<style scoped>
* {
    color: aliceblue;
}

body {
    text-align: center;
    margin: 0px;
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
    margin: 10px;
    /* border: 0px solid #8397a0; */
    display: flex;
    border-radius: 10px;
    max-width: 45%;
    box-shadow: -5px 5px 5px 2px rgba(0, 0, 0, 0.5);
    
}

.img-small {
    max-height: 384px;
    border: 0;
    border-radius: 10px;
  
}

</style>