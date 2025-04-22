import mitt from "mitt";
import { ref } from "vue";
import { defineStore } from 'pinia'

const emitter = mitt();

export let isRandomSortPic = ref(false);

emitter.on("changeIsRandomSortPic", (data) => {
    isRandomSortPic.value = !isRandomSortPic.value;
})

export default emitter;