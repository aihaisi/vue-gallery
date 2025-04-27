<template>
    <div>
        <button @click="fetchArtwork">获取 Pixiv 作品</button>
        <button @click="fetchJMComic">获取 JM 作品</button>
        <div>{{ data }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const artworkData = ref<any>(null);
var data = ref<any>(null);;

const fetchArtwork = async () => {
    try {
        const response = await fetch(`https://manhuabika.com/pchapter/?cid=632bcf769c0a9a1aaa4ab8b1&chapter=127&chapterPage=1&maxchapter=127`);
        console.log('Response:', response);
        const htmlString = await response.text();
        // 使用DOMParser解析HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');

    } catch (error) {
        console.error('Failed to fetch artwork:', error);
    }
};

const fetchJMComic = async () => {
    try {
        const response = await fetch(`http/localhost:3001/api/jm/?id=366747`);
        console.log('Response:', response.headers.get('content-type'));
        const htmlString = await response.text();
        console.log('HTML String:', htmlString);
    } catch (error) {
        console.error('Failed to fetch artwork:', error);
    }
}
</script>


<style scoped></style>