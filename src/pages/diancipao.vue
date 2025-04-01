<template>

    <head>
        <title>Picture</title>
    </head>
      
    <body>
        <ShowGallery :imgsPath="img" :isSorted="false"/>
    </body>
</template>
<script lang='ts' setup>
import ShowGallery from '@/components/ShowGallery.vue'
//const images = import.meta.glob('@/pages/img/*.{png,jpg,svg,gif}'); //, { eager: true }

const images = import.meta.glob('@/store/goodianci/*')
const img: string[] = Object.keys(images)

</script>

<style scoped>
</style>