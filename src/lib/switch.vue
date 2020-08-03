<template>
  <span
    :class="[type,size,{checked:value}]"
    class="active-text switch-text"
    style="margin-right:8px"
    v-if="activeText"
  >{{activeText}}</span>
  <button @click="toggle" :class="[{checked:value},type,btnClass,size]">
    <span></span>
  </button>
  <span
    :class="[type,size]"
    class="switch-text"
    style="margin-left:8px"
    v-if="activeText"
  >{{inactiveText}}</span>
</template>
<script lang='ts'>
import { ref } from "vue";
export default {
  props: {
    value: Boolean,
    type: { type: String, default: "primary" },
    disabled: Boolean,
    size: { type: String, default: "" },
    activeText: String,
    inactiveText: String,
  },
  setup(props, context) {
    const btnClass = props.disabled ? "disabled" : "normal";
    const toggle = () => {
      if (props.disabled) return;
      context.emit("update:value", !props.value);
    };
    return { toggle, btnClass };
  },
};
</script>
<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
$hs: 16px;
$h2s: $hs - 2px;
$primary: #1890ff;
$danger: #f5222d;
$success: #67c23a;
.active-text {
  &.checked {
    color: $primary;
    &.danger {
      color: $danger;
    }
    &.success {
      color: $success;
    }
  }
}
.switch-text {
  font-size: 14px;
  vertical-align: middle;
  &.small {
    font-size: 12px;
  }
}
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: rgba(0, 0, 0, 0.25);
  border-radius: $h/2;
  vertical-align: middle;
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
    background: $primary;
    > span {
      left: calc(100% - #{$h} + 2px);
    }
  }
  &.checked.primary {
    background: $primary;
  }
  &.checked.danger {
    background: $danger;
  }
  &.checked.success {
    background: $success;
  }
  &.disabled {
    opacity: 0.3;
  }
  &.normal:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.checked:active {
    &.normal > span {
      margin-left: -4px;
    }
  }
  &:focus {
    outline: none;
  }
}
.small {
  height: $hs;
  width: $hs * 2;
  > span {
    height: $h2s;
    width: $h2s;
    border-radius: $h2s/2;
    top: 1.2px;
    left: 1.2px;
  }
  &.checked {
    > span {
      left: calc(100% - #{$hs});
    }
  }
  &.normal:active {
    > span {
      width: $h2s + 2px;
    }
  }
  &.checked:active {
    &.normal > span {
      margin-left: -2px;
    }
  }
}
</style>