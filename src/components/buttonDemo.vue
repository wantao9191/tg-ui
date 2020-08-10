<template>
  <div>
    <tg-button>button</tg-button>
    <tg-button theme="button">button</tg-button>
    <tg-button theme="link">link</tg-button>
    <tg-button theme="text">text</tg-button>
  </div>
</template>
<script lang='ts'>
import Button from "../lib/button.vue";
export default {
  components: { tgButton: Button },
};
</script>
<style lang="scss" scoped>
</style>