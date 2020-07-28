<template>
  <div class="topnav">
    <div class="logo"><router-link to="/">TG-UI</router-link> </div>
    <ul class="menu">
      <li>支持</li>
      <li>捐款</li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>