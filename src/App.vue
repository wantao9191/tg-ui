<template>
  <router-view></router-view>
</template>
<script lang='ts'>
import { ref } from 'vue';
export default {
  name: "App",
  setup(){
    const menuVisible = ref()
  }
};
</script>
<style>

</style>
