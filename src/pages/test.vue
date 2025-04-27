<template>
    <div>
        <!-- <button @click="fetchArtwork">获取 Pixiv 作品</button> -->
        <br>
        <input v-model="inputNumber" type="text" placeholder="请输入数字" @keyup.enter="fetchJMComic">
        <button @click="fetchJMComic">GET</button>
        <div>{{ data }}</div>
    </div>

    <body>
        <ShowGallery :imgsPath="img" />
    </body>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import ShowGallery from '@/components/ShowGallery.vue';

const artworkData = ref<any>(null);
var data = ref<any>(null);;
const inputNumber = ref('')

// const fetchArtwork = async () => {
//     try {
//         const response = await fetch(`https://manhuabika.com/pchapter/?cid=632bcf769c0a9a1aaa4ab8b1&chapter=127&chapterPage=1&maxchapter=127`);
//         console.log('Response:', response);
//         const htmlString = await response.text();
//         // 使用DOMParser解析HTML
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(htmlString, 'text/html');

//     } catch (error) {
//         console.error('Failed to fetch artwork:', error);
//     }
// };

const fetchJMComic = async () => {
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
        console.error('Failed to fetch artwork:', error);
    }
}

const images = import.meta.glob("@/getjm/out/*/*")
const img: string[] = Object.keys(images)


</script>


<style scoped></style>