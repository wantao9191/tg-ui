<template>
  <template v-if="visible">
    <div class="wt-dialog-overlay" @click="onClickOverlay"></div>
    <div class="wt-dialog-wrapper">
      <div class="wt-dialog">
        <header slot="header"></header>
        <main>内容</main>
        <footer>按钮</footer>
      </div>
    </div>
  </template>
</template>
  
</template>
<script lang='ts'>
export default {
  props: {
    visible: { type: Boolean, default: false },
    closeOnOverlay: { type: Boolean, default: true },
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", false);
      context.emit("close");
    };
    const onClickOverlay = () => {
      if (props.closeOnOverlay) {
        close();
      }
    };
    return { close, onClickOverlay };
  },
};
</script>
<style lang="scss">
.wt-dialog-overlay {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 2000;
}
.wt-dialog-wrapper {
  width: 50%;
  background: #fff;
  position: absolute;
  top: 20vh;
  left: 50%;
  border-radius: 3px;
  transform: translate(-50%, -50%);
  z-index: 2001;
  > .wt-dialog {
    > header {
      font-size: 18px;
      padding: 20px 20px 10px;
      font-weight: 400;
    }
    > main {
      padding: 30px 20px;
    }
    > footer {
      padding: 10px 20px 20px;
    }
  }
}
</style>