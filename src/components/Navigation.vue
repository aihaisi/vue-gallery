<template>
    <div class="navigation">
        <RouterLink to="/main" active-class="link-active">主要</RouterLink>
        <RouterLink to="/person" active-class="link-active">个人</RouterLink>
        <RouterLink to="/content" active-class="link-active">讨论</RouterLink>
        <RouterLink to="/about" active-class="link-active">关于</RouterLink>
        <RouterLink :to="{ name: 'east' }" active-class="link-active">东方</RouterLink>
    </div>
</template>

<script setup lang="ts" name="Person">
import { RouterLink, useRouter } from 'vue-router';
import { onMounted, onUnmounted } from 'vue';

const router = useRouter();

onMounted(() => {
    const navigation = document.getElementsByClassName('navigation')[0];

    function scroll() {
        if (window.scrollY > 0) {
            navigation.classList.add('navigation-scrolled');
        } else {
            navigation.classList.remove('navigation-scrolled');
        }
    }

    window.addEventListener('scroll', scroll);
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
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    padding-left: 20px;
    padding-right: 20px;
    height: 40px;
    width: 100%;
    z-index: 100;
    transition: all 0.3s ease;

}

.navigation-scrolled{
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

.router-view {
    flex: auto;
}
</style>