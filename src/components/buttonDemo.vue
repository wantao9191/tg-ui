<template>
  <div class="demo button-demo">
    <h2>Button 按钮</h2>
    <p>常规的操作按钮</p>
    <h3>何时使用</h3>
    <ul>
      <li>按钮用于开始一个即时操作。</li>
      <li>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</li>
    </ul>
    <h3>代码演示</h3>
    <!-- 基础用法 -->
    <div class="demo-block">
      <div class="demo-component">
        <div class="component-item">
          <tg-button>默认按钮</tg-button>
          <tg-button type="primary">主要按钮</tg-button>
          <tg-button type="success">成功按钮</tg-button>
          <tg-button type="danger">危险按钮</tg-button>
        </div>
        <div class="component-item">
          <tg-button round>默认按钮</tg-button>
          <tg-button type="primary" round>主要按钮</tg-button>
          <tg-button type="success" round>成功按钮</tg-button>
          <tg-button type="danger" round>危险按钮</tg-button>
        </div>
      </div>
      <div class="demo-desc">
        <span class="desc-title">基本用法</span>
        <div class="desc-text">基础的按钮用法</div>
      </div>
      <div class="demo-code" v-show="buttonData1.visible">
        <code class="code-bg">
          <div class="code-text">
            通过
            <code>type</code>
            属性
            <code>String</code> 类型的变量，改变
            <code>tg-button</code>
            的样式。
          </div>
          <span class="code-tag">&lt;temlate&gt;</span>
          <span class="code-tag code-script-2">&lt;div&gt;</span>
          <span class="code-tag code-script-4">
            &lt;tg-button&gt;
            <span>默认按钮</span>&lt;/tg-button&gt;
          </span>
          <span class="code-tag code-script-4">
            &lt;tg-button type="primary"&gt;
            <span>主要按钮</span>&lt;/tg-button&gt;
          </span>
          <span class="code-tag code-script-4">
            &lt;tg-button type="success"&gt;
            <span>成功按钮</span>&lt;/tg-button&gt;
          </span>
          <span class="code-tag code-script-4">
            &lt;tg-button type="danger"&gt;
            <span>危险按钮</span>&lt;/tg-button&gt;
          </span>
          <span class="code-tag code-script-2">&lt;/div&gt;</span>
          <span class="code-tag code-script-2">&lt;div&gt;</span>
          <span class="code-tag code-script-4">
            &lt;tg-button round&gt;
            <span>默认按钮</span>&lt;/tg-button&gt;
          </span>
          <span class="code-tag code-script-4">
            &lt;tg-button type="primary" round&gt;
            <span>主要按钮</span>&lt;/tg-button&gt;
          </span>
          <span class="code-tag code-script-4">
            &lt;tg-button type="success" round&gt;
            <span>成功按钮</span>&lt;/tg-button&gt;
          </span>
          <span class="code-tag code-script-4">
            &lt;tg-button type="danger" round&gt;
            <span>危险按钮</span>&lt;/tg-button&gt;
          </span>
          <span class="code-tag code-script-2">&lt;/div&gt;</span>
          <span class="code-tag">&lt;/temlate&gt;</span>
        </code>
      </div>
      <div class="demo-btns">
        <a href="javaScript:;">copy</a>
        <a href="javaScript:;" @click="toggleDemoCode1">{{buttonData1.txt}}</a>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import Button from "../lib/button.vue";
import { reactive } from "vue";
export default {
  components: { tgButton: Button },
  setup() {
    const buttonData1 = reactive({ visible: false, txt: "显示" });
    const toggleDemoCode1 = () => {
      buttonData1.visible = !buttonData1.visible;
      buttonData1.txt = buttonData1.visible ? "隐藏" : "显示";
    };
    return { buttonData1, toggleDemoCode1 };
  },
};
</script>
<style lang="scss" scoped>
</style>