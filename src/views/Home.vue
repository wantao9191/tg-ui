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
            <h3 style="margin-top:20px">TG-UI，一套为开发者、设计师和产品经理准备的基于 Vue 3.0 的桌面端组件库</h3>
          </div>
          <p class="actions">
            <a href="https://github.com">GitHub</a>
            <router-link to="/doc">开始</router-link>
          </p>
        </div>
      </div>
    </div>
    <div class="cards">
      <ul>
        <li>
          <h3>易用</h3>
          <div class="content">有一定的 HTML、CSS、JavaScript？掌握Vue 2.0?即刻点击开始构建应用！</div>
        </li>
        <li>
          <h3>美观</h3>
          <div class="content">融合的多款UI组件优点，打造大气时尚web应用！</div>
        </li>
        <li>
          <h3>全新</h3>
          <div class="content">使用vue 3.0 + vite + TypeScript全新技术打造，在使用中学习新特性，新技术，还在等什么！</div>
        </li>
      </ul>
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
  padding: 200px 0;
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .banner-top {
    display: flex;
    > .logo {
      padding-right: 60px;
      > img {
        width: 220px;
      }
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
.cards {
  width: 50%;
  margin: 0 auto;
  > ul {
    display: flex;
    > li {
      flex: 1;
      text-align: center;
      margin: 0 10px;
      padding: 16px 10px;
      border-radius: 4px;
      > h3 {
        color: #007acc;
        font-weight: 700;
      }
      >.content {
        padding: 20px;
        font-size: 14px;
        letter-spacing: 2px;
        line-height: 1.5;
      }
    }
    >li:hover {
      box-shadow: 0 2px 8px #999;
    }
  }
}
</style>