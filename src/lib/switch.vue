<template>
  <button @click="toggle" :class="[{checked:value},type]">
    <span></span>
  </button>
</template>
<script lang='ts'>
import { ref } from "vue";
export default {
  props: { value: Boolean, type: { type: String, default:'primary' } },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>
<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
$primary: #1890ff;
$danger: #f5222d;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;
  cursor: pointer;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    transition: all 250ms;
  }
  &.checked {
    > span {
      left: calc(100% - #{$h} - 2px);
    }
  }
  &.checked.primary {
    background: $primary;
  }
  &.checked.danger {
    background: $danger;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.checked:active {
    > span {
      margin-left: -4px;
    }
  }
  &:focus {
    outline: none;
  }
}
</style>