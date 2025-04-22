import { ref, onBeforeMount, computed } from 'vue'
import { defineStore } from 'pinia'

import emitter from '@/tools/emitter'


export const usePixivPicStore = defineStore('pixivPic', () => {
    const images = import.meta.glob('@/store/pixivPic/*.{png,jpg,svg,gif,webp}')
    const img: string[] = Object.keys(images)

    let isShowBigImg = ref(false)
    let targetBigImg = ref('')

    function showBigImg(bigImg: string) {
        isShowBigImg.value = true
        targetBigImg.value = bigImg 
        

    }


    function randomSortImg() {
        img.sort(function () {
            return (Math.random() - 0.5)
        }
        )
    }
    return { img, isShowBigImg, targetBigImg, showBigImg, randomSortImg }
}
)
