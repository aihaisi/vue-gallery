<template>
    <div class="navigation">
        <RouterLink to="/main" active-class="link-active">主要</RouterLink>
        <RouterLink to="/person" active-class="link-active">个人</RouterLink>
        <RouterLink to="/girlsband" active-class="link-active">乐队</RouterLink>
        <RouterLink :to="{ name: 'east' }" active-class="link-active">东方</RouterLink>
        <RouterLink v-if="isShow" to="/content" active-class="link-active">白</RouterLink>
        <RouterLink v-if="isShow" to="/diancipao" active-class="link-active">电磁炮</RouterLink>
        <RouterLink v-if="isShow" to="/pixivanime" active-class="link-active">Pixiv</RouterLink>
        <button id="menu-button" @click="isShow = !isShow"><span>打开菜单</span><svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 10a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1-.75-.75ZM1.75 7a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H1.75Z"></path></svg></button>
    </div>


</template>

<script setup lang="ts" name="Person">
import { RouterLink, useRouter } from 'vue-router';
import { onMounted, onUnmounted ,watch } from 'vue';
import { ref } from 'vue';

const router = useRouter();
var navigation: Element;

function toPage() {
    router.push({
        path:"/girlsband",

    }
    )
}

function scroll() {
    if (window.scrollY > 0) {
        navigation.classList.add('navigation-scrolled');
    } else {
        navigation.classList.remove('navigation-scrolled');
    }
}

let isShow = ref(false);

onMounted(() => {

    navigation = document.getElementsByClassName('navigation')[0];

    window.addEventListener('scroll', scroll);
});


onUnmounted(() => {
    window.removeEventListener('scroll', scroll);
    // 移除事件监听
});

</script>


<style scoped>
* {
    background-color: #232124;
}

.navigation {
    position: fixed;
    /*位置永远保持在页面顶部，即使滑动也不会影响*/
    top: 0;
    left: 0;
    background-color: rgb(21, 19, 31);
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    padding: 5px;
    padding-left: 20px;
    padding-right: 20px;
    height: 40px;
    width: 100%;
    z-index: 100;
    transition: all 0.3s ease;

}

.navigation-scrolled {
    background-color: rgba(37, 37, 48, 0.8);
    box-shadow: 0 0 5px;
}

.navigation a {
    position: relative;
    display: inline-block;
    padding: 8px 24px;
    margin: 10px 40px;
    background-color: rgb(48, 48, 53);
    color: #ffffff;
    text-decoration: none;
    text-align: center;
    font-size: 18px;
    transition: all 0.5s ease;
    border-radius: 20px;
    border-color: aqua;
    box-shadow: 0 0 5px;
}

.navigation a:hover {
    background-color: #6f88db;
}

.navigation a.link-active {
    border-color: transparent;
    color: #ffffff;
    background-color: #3e63dd;
}
#menu-button {
    position: fixed;
    right:0px;
    scale:50%;
    /* width:20px;
    height:20px; */
}

.router-view {
    flex: auto;
}

</style>