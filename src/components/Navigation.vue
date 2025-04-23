<template>
    <div class="navigation">
        <RouterLink to="/main" active-class="link-active">主要</RouterLink>
        <RouterLink to="/person" active-class="link-active">个人</RouterLink>
        <RouterLink to="/girlsband" active-class="link-active">乐队</RouterLink>
        <RouterLink :to="{ name: 'east' }" active-class="link-active">东方</RouterLink>
        <RouterLink v-if="isShowMorePic" to="/content" active-class="link-active">Room1</RouterLink>
        <RouterLink v-if="isShowMorePic" to="/diancipao" active-class="link-active">Room2</RouterLink>
        <RouterLink v-if="isShowMorePic" to="/pixivanime" active-class="link-active">Room3</RouterLink>
        <button id="menu-button" @click=clickMenu()><span></span><svg fill="none" viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor"
                    d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 10a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1-.75-.75ZM1.75 7a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H1.75Z">
                </path>
            </svg></button>
    </div>

    <div :class="['settings-panel',{open: isSettingsOpen}]">
        <div class="settings-header">
            <h1>设置</h1>
        </div>

        <div class="settings-content">
            <ui>
                <li>图片随机打乱<el-button id="li-one" round :type="liOneType" @click="changeIsRandomSortPic()"
                        style="right: 70px; position: absolute"> 打开 </el-button></li>
                <li>显示额外图表<el-button id="li-two" round :type="liTwoType" @click="changeIsShowMorePic()"
                        style="right: 70px; position: absolute"> 打开 </el-button></li>
                <li>设置3</li>
                <li>设置4</li>
            </ui>
        </div>

        <button id="close-button" @click=closeSettings()><span></span><svg fill="none" viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor"
                    d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 10a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1-.75-.75ZM1.75 7a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H1.75Z">
                </path>
            </svg></button>
    </div>
</template>

<script setup lang="ts" name="Person">
import { RouterLink, useRouter } from 'vue-router';
import { onMounted, onUnmounted, watch } from 'vue';
import { ref } from 'vue';
import emitter from '@/tools/emitter';
import { isRandomSortPic } from '@/tools/emitter';

const router = useRouter();
var navigation: Element;

function toPage() {
    router.push({
        path: "/girlsband",

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

//点击菜单按钮触发的事件

let isSettingsOpen = ref(false);

function clickMenu() {
    isSettingsOpen.value = true;
}

function closeSettings() {
    isSettingsOpen.value = false;
}

// 用于控制lione的type属性以改变样式
let liOneType = ref(isRandomSortPic.value ? "info" : "primary")

function changeIsRandomSortPic() {
    emitter.emit('changeIsRandomSortPic');
    let li = document.getElementById('li-one')
    if (li) {
        li.innerText = isRandomSortPic.value ? "关闭" : "打开"
        liOneType.value = isRandomSortPic.value ? "info" : "primary"
    }
}

//用于控制litwo的type属性以改变样式
let isShowMorePic = ref(false)
let liTwoType = ref(isShowMorePic.value ? "info" : "primary")
function changeIsShowMorePic() {
    let li = document.getElementById('li-two')
    isShowMorePic.value = !isShowMorePic.value
    if (li) {
        li.innerText = isShowMorePic.value ? "关闭" : "打开"
        liTwoType.value = isShowMorePic.value ? "info" : "primary"
    }
}

///////////////

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
    display: inline-flex;
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
    right: 15px;
    width: 30px;
    height: 30px;
    /* width:20px;
    height:20px; */
}

.settings-panel {
    position: fixed;
    top: 0;
    right: -30%;
    width: 30%;
    height: 100%;
    background-color: rgba(28, 28, 28, 0.805);
    color: white;
    z-index: 200;
    transition: all 0.3s ease;
}

.settings-panel.open{
    right: 0;
}

.settings-header {
    position: relative;
    background-color: rgba(0, 0, 0, 0);
}

.settings-header h1 {
    font-size: 24px;
    margin: 0;
    position: relative;
    top: 10px;
    left: 20px;
    color: white;
    background-color: rgba(0, 0, 0, 0);
}

#close-button {
    position: absolute;
    top: 10px;
    right: 15px;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
    width: 30px;
    height: 30px;
}

.settings-content {
    position: relative;
    top: 20px;
    left: 30px;
    color: white;
    background-color: rgba(0, 0, 0, 0);
    font-size: 20px;
}

.settings-content ul,
.settings-content li {
    list-style-type: none;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0);
}

.router-view {
    flex: auto;
}
</style>