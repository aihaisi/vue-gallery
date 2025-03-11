<template>

    <head>
        <title>个人相册</title>
    </head>

    <body>
        <h2>东方</h2>
            <hr>
            <div class="img-container">
            
             <div v-for="(pic,index) in img" :key="index" class="img-div">
                <img :src="pic" class="img-small" @click="showBigImg(pic)" alt="单击图片查看大图"/>
                <div v-if="isShowBigImg" class="modal" @click="isShowBigImg = false">
                    <img :src="targetBigImg" alt="Large Image" class="large-image" />
                    </div>
                </div>
            </div>
            <!-- <table>
                <tr>
                    <td align="center">
                        <img src="./img/01.jpg" @click="showModal = true" width="216" height="384" border="0"
                            class="img_x" alt="单击图片查看大图"/>
                        <div v-show="showModal" class="modal" @click="showModal = false">
                            <img src="@/pages/img/01.jpg" alt="Large Image" class="large-image" />
                        </div>
                    </td>
                    <td align="center">
                        <img src="./img/02.jpg" @click="showModal = true" width="216" height="384" border="0" 
                            class="img_x" alt="单击图片查看大图"/>
                        <div v-if="showModal" class="modal" @click="showModal = false">
                            <img src="@/pages/img/02.jpg" alt="Large Image" class="large-image" />
                        </div>
                    </td>
                    <td align="center">
                        <a href="./img/03.jpg" target="_blank">
                            <img src="@/pages/img/03.jpg" width="216" height="384" border="0" class="img_x"
                                alt="单击图片查看大图"/></a>
                    </td>
                </tr>
                <tr>
                    <td align="center">
                        <a href="@/pages/img/04.jpg" target="_blank">
                            <img src="@/pages/img/04.jpg" width="216" height="384" border="0" class="img_x"
                                alt="单击图片查看大图"/></a>
                    </td>
                    <td align="center">
                        <a href="@/pages/img/05.jpg" target="_blank">
                            <img src="@/pages/img/05.jpg" width="216" height="384" border="0" class="img_x"
                                alt="单击图片查看大图"/></a>
                    </td>
                    <td align="center">
                        <a href="@/pages/img/06.jpg" target="_blank">
                            <img src="@/pages/img/06.jpg" width="216" height="384" border="0" class="img_x"
                                alt="单击图片查看大图"/></a>
                    </td>
                </tr>
                <tr>
                    <td align="center">
                        <a href="@/pages/img/07.jpg" target="_blank">
                            <img src="@/pages/img/07.jpg" width="216" height="384" border="0" class="img_x"
                                alt="单击图片查看大图"/></a>
                    </td>
                    <td align="center">
                        <a href="@/pages/img/08.jpg" target="_blank">
                            <img src="@/pages/img/08.jpg" width="216" height="384" border="0" class="img_x"
                                alt="单击图片查看大图"/></a>
                    </td>
                    <td align="center">
                        <a href="@/pages/img/09.jpg" target="_blank">
                            <img src="@/pages/img/09.jpg" width="216" height="384" border="0" class="img_x"
                                alt="单击图片查看大图"/></a>
                    </td>
                </tr>
            </table> -->
    </body>
</template>
<script lang='ts' setup>
import { computed, ref ,reactive} from 'vue'
import { onBeforeMount } from 'vue';
//const images = import.meta.glob('@/pages/img/*.{png,jpg,svg,gif}'); //, { eager: true }

const images = import.meta.glob('@/pages/img/*.{png,jpg,svg,gif}')
const img: string[] = Object.keys(images)
img.sort(function(){
    return (Math.random() - 0.5)
})

// const loadedImages = (filename:string) => import(`@/pages/img/${filename}`)
// const img = Object.keys(images).map(key => images[key]());
    // onBeforeMount(()=>
    //     console.log(img)
    // )

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
body{
    text-align: center;
    margin: 0px;
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
    /* border: 0px solid #8397a0; */
    border-radius: 10px;
    

}
.img-small {
    height : 384px;
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