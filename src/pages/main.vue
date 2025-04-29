<template>

    <head>
        <title>主页</title>
    </head>

    <body>
        <div id="main">
            <div id="text">
                <h1>Welcome to Vue Gallery!</h1>
                <h1>Hello</h1>
            </div>
        </div>


    </body>
</template>
<script lang='ts' setup>

</script>

<style scoped>
* {
    color: aliceblue;
    font-family: Arial, Helvetica, sans-serif;

}

body div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient(0.5turn, rgb(21, 19, 31), #9e4be2, #350fa9, rgb(21, 19, 31));
    overflow: hidden;
}

#text {
    left: 20px;
    background-color: transparent;
}

h1 {
    font-size: 40px;
    text-align: left;
}
</style>