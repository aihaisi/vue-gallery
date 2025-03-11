<template>

    <head>
        <title>Picture</title>
    </head>

    <body>
            <h2>Comment</h2>
            <hr>
            <div>218937219</div>
             <div v-for="(pic,index) in img" :key="index" class="img-div">
                <img :src="pic" class="img_small" @click="showBigImg(pic)" alt="单击图片查看大图"/>
                <div v-if="isShowBigImg" class="modal" @click="isShowBigImg = false">
                    <img :src="targetBigImg" alt="Large Image" class="large-image" />
                    </div>
                </div>
    </body>
</template>
<script lang='ts' setup>
import { computed, ref ,reactive} from 'vue'
import { onBeforeMount } from 'vue';
//const images = import.meta.glob('@/pages/img/*.{png,jpg,svg,gif}'); //, { eager: true }

const images = import.meta.glob('@/pages/bai/*.{png,jpg,svg,gif,webp}')
const img: string[] = Object.keys(images)
img.sort(function(){
    return (Math.random() - 0.5)
})

// const loadedImages = (filename:string) => import(`@/pages/img/${filename}`)
// const img = Object.keys(images).map(key => images[key]());

let isShowBigImg = ref(false)
let targetBigImg = ref('')

function showBigImg(bigImg: string) {
    isShowBigImg.value = true
    targetBigImg.value = bigImg
}

</script>

<style scoped>
*{
    color:aliceblue;
}
body {
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.img-div {
    margin: 15px;
    /* border: 0px solid #8397a0; */
    cursor: pointer;
    display: inline-block;
    border-radius: 10px;
    

}
.img_small {
    max-height: 600px;
    border : 0;
    border-radius: 10px;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
    align-items: center;
}
.large-image {
  max-width: 100%;
  max-height: 100%;
}
</style>