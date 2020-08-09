<template>
  <button class="tg-button" :class="`tg-${theme}-button`">
    <slot />
  </button>
</template>
<script lang='ts'>
export default {
  props: {
    theme: { type: String, default: "default" },
  },
  setup() {},
};
</script>
<style lang="scss" scoped>
</style>