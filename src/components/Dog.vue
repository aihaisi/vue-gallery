<template>

  <el-button round type="primary" @click="getDog">Get Dog</el-button>


  <div>
    <img v-for="(img, index) in dogList" :key=index :src="img" alt="Dog Image" />
    <br>

  </div>
</template>

<script lang="ts" setup name='Dog'>
import { useDog } from '@/hooks/useDog';

const { dogList, getDog } = useDog();

</script>




<style scoped>
div {
  margin: 10px;
  padding: 10px;
}

img {
  height: 200px;
  margin: 10px;
}
</style>