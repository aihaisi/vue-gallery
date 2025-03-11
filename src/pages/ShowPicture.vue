<template>

    <head>
        <title>Girls Band Cry</title>
    </head>

    <body>
        <!-- <center> -->
        <h2>Girls Band Cry</h2>
        <hr>
        <div class="img-container">
            <div v-for="(pic, index) in img" :key="index" class="img-div">
                <img :src="pic" class="img-small" @click="showBigImg(pic)" alt="单击图片查看大图" />
                <div v-if="isShowBigImg" class="modal" @click="isShowBigImg = false">
                    <img :src="targetBigImg" alt="Large Image" class="large-image" />
                </div>
            </div>
        </div>
    </body>
</template>
<script lang='ts' setup>
// import { computed, ref, reactive } from 'vue'
// import { onBeforeMount } from 'vue';
// import { nanoid } from 'nanoid';  //随机生成id的组件
//const images = import.meta.glob('@/pages/img/*.{png,jpg,svg,gif}'); //, { eager: true }
import { usePixivPicStore } from '@/store/picStore';
import { storeToRefs } from 'pinia';

// const images = import.meta.glob('@/pages/pixivPic/*.{png,jpg,svg,gif,webp}')
// const img: string[] = Object.keys(images)
const pixivPicStore = usePixivPicStore()
const img = pixivPicStore.img
const sortImg = pixivPicStore.sortImg
const showBigImg = pixivPicStore.showBigImg
const { isShowBigImg, targetBigImg } = storeToRefs(pixivPicStore)

sortImg()

</script>

<style scoped>
* {
    color: aliceblue;
}
body{
    margin: 0;
    width: 100%;
    text-align: center;
}


.img-container {
    position: relative;
    display: flex;   /* 弹性布局 */
    flex-wrap: wrap;      /* 自动换行 */
    justify-content: center;    /* 垂直方向居中 */
    align-items: center;    /* 水平方向居中 */
    /* margin: 0 auto; */
    /* justify-content: center; */
    /* align-items: center; */
}

.img-div {
    margin: 10px; 
    border-radius: 10px;
}

.img-small {
    height: 384px;
    border: 0;
    border-radius: 10px;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
}

.large-image {
    max-width: 100%;
    max-height: 100%;
}
</style>