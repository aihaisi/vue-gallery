<template>

    <head>
        <title>Picture</title>
    </head>

    <body>
        <div class="outer">
        <ShowGallery :imgsPath="img"/>
        </div>
    </body>

</template>
<script lang='ts' setup>
import ShowGallery from '@/components/ShowGallery.vue'
//const images = import.meta.glob('@/pages/img/*.{png,jpg,svg,gif}'); //, { eager: true }

const images = import.meta.glob("@/store/pixivPic/*")
const img: string[] = Object.keys(images)

</script>

<style scoped>
</style>