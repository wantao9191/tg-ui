<template>
  <div class="doc">
    <top-nav></top-nav>
    <div class="content">
      <doc-aside></doc-aside>
      <doc-menu></doc-menu>
    </div>
  </div>
</template>
<script>
import topNav from "../components/topNav.vue";
import docAside from "../components/doc/docAside.vue";
import docMenu from "../components/doc/docMenu.vue";
export default {
  components: { topNav, docMenu, docAside }
};
</script>
<style lang="scss" scoped>
.doc {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .content {
    display: flex;
    flex-grow: 1;
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
  }
}
</style>