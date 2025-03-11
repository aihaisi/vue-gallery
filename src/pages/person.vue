<template>
    <div class="person">
        <h1>{{msg}}</h1>
        <p>姓名：<input v-model="data.name"></input></p>
        <h2>您好，{{ data.name }}！<button @click="showAge">{{buttonIsshowAge}}</button></h2>
        <h2 v-if="isShow">您的年龄为：{{ data.age }}岁</h2>
        <h2>您有以下{{ carNum }}辆车:</h2>
        <ul>
            <li v-for="(value, key) in data.car">{{ key }}: {{ value }}</li>
        </ul>
        <button @click="changeName">改变姓名</button>
        <button @click="changeAge">改变年龄</button>
        <br>
        <button @click="changeCar">添加车辆</button>
    </div>
</template>

<script lang="ts" setup>
   import { ref , reactive, watch, computed } from 'vue'

    
    let buttonIsshowAge = ref("显示年龄")
    let msg = ref('Hello Vue')

    let data = reactive({
        name: '张三',
        age: 20,
        car: {
            1: 'BMW',
            2: 'Audi'
        }
    })
    let data2 = ref({
        name :'李四',
        age: 40,
        car: {
            1: 'Tesla',
            2: 'Toyota'
        }
    })
    let carNum = computed(() => {
        return Object.keys(data.car).length
    })
    let isShow = ref(false)
    function showAge(){
        isShow.value = !isShow.value
        buttonIsshowAge.value = isShow.value? "隐藏年龄" : "显示年龄"
    }

    function changeCar(){
        Object.assign(data.car, { 3: 'Tesla' ,
            4: 'Ford'
        })
        data2.value.car = { 1: 'Tesla' ,
            2: 'Ford'
        }
    }

    function changeName(){
        data2.value.name += '~'
    }

    function changeAge(){
        data.age += 1
    }
    watch(data, (newVal, oldVal) => {
        console.log(newVal,oldVal)
    })      //reactive响应式对象默认开启deep，且会监控所有属性
    watch([()=>data2.value.name,()=>data2.value.age], (newVal, oldVal) => {
        console.log(newVal,oldVal)
    })

</script>

<style scoped>

.person {
        padding: 20px;
        margin: 20px;
        background-color: skyblue;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
    h1,h2{
        color:black;
    }
    p{
        color:rgb(75, 3, 33);
    }
    li{
        color:rgb(255, 8, 8);
    }

</style>