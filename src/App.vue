<script setup lang="ts">
import Person from './components/Navigation.vue';
import Dog from './components/Dog.vue';
import Navigation from './components/Navigation.vue';
import { onMounted } from 'vue';
import { ref } from 'vue';

</script>

<template>
    <div id="nagivation">
    <Navigation/>
    </div>
  <div class="app">
    <RouterView/>
    
  </div>
</template>

<style scoped> 
  *{
    background-color: rgb(21, 19, 31)
  }
  .app {
    position: relative;
    /* display: flex; */
    /* flex-direction: row;
    align-items: center;
    justify-content: center; */
    top: 40px;
    min-height: 50vh;
    padding: 0;
  }



/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
