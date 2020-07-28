<template>
  <div class="home">
    <top-nav></top-nav>
    <div class="banner">
      <div class="logo"></div>
      <div class="intro">
        <h1>TG-UI</h1>
        <h2>基于Vue3和 TypeScript的UI框架</h2>
        <div class="links">
          <a href="http://github.com">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import topNav from "../components/topNav.vue";
export default {
  components: { topNav },
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .intro {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 100px 0;
    background: lightgreen;
  }

  > .content {
    display: flex;
    flex-grow: 1;
    > aside {
      width: 200px;
      background: lightblue;
    }
    > main {
      flex-grow: 1;
      background: lightgreen;
    }
  }
}
</style>