<template>
  <div class="layout">
    <top-nav class="nav" />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>组件</h2>
        <ol>
          <li v-for="(m,i) in menuList" :key="i" :class="{selected:$route.path == m.path}">
            <router-link :to="m.path">{{m.title}}</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang='ts'>
import topNav from "../components/topNav.vue";
import { inject, Ref, ref } from "vue";
export default {
  components: { topNav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const menuList = ref([
      { title: "Switch 开关", path: "/doc/switch" },
      { title: "Button 组件", path: "/doc/button" },
      { title: "Icon 图标", path: "/doc/icon" },
      { title: "Dialog 对话框", path: "/doc/dialog" },
      { title: "Tabs 标签", path: "/doc/tabs" },
    ]);
    return { menuVisible, menuList };
  },
};
</script>
<style lang="scss" scoped>
$primary: #1890ff;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 256px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
    > h2 {
      font-size: 16px;
      font-weight: 700;
    }
  }
  > main {
    flex-grow: 1;
    padding: 16px;
  }
}
aside {
  width: 240px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  box-shadow: 0 2px 8px #ddd;
  > h2 {
    margin-bottom: 16px;
    padding-left: 40px;
  }
  > ol {
    > li {
      padding: 8px 0 8px 40px;
      font-size: 14px;
      color: #444;
      > a {
        display: block;
      }
      &.selected {
        background: #e6f7ff;
        border-right: 3px solid $primary;
      }
      &:hover {
        color: $primary;
      }
      > .router-link-active {
        color: $primary;
      }
    }
  }
}
main {
  overflow: auto;
}
</style>