<template>
  <div>
    <top-nav />
    <div class="banner">
      <div class="banner-top">
        <div class="logo">
          <img src="../assets/logo.png" alt />
        </div>
        <div class="desc">
          <div class="desc-top">
            <h1>TG-UI</h1>
            <h2 style="margin-top:20px">好用vueUI框架</h2>
          </div>
          <p class="actions">
            <a href="https://github.com">GitHub</a>
            <router-link to="/doc">开始</router-link>
          </p>
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
.banner {
  padding: 100px 0;
  width:60%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .banner-top {
    display: flex;
    > .logo {
      padding-right: 80px;
    }
    > .desc {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      > .actions {
        padding: 8px 0;
        a {
          margin: 0 8px;
          background: #fff;
          display: inline-block;
          $h: 28px;
          height: $h;
          line-height: $h;
          border-radius: $h/2;
          padding: 0 8px;
          border: 1px solid #ddd;
        }
      }
    }
  }
}
</style>