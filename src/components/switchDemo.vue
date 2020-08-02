<template>
  <div class="switch-demo">
    <h2>Switch 开关</h2>
    <p>开关选择器</p>
    <h3>何时使用</h3>
    <ul>
      <li>需要表示开关状态/两种状态之间的切换时；</li>
      <li>表示两种相对立的状态间的切换，</li>
    </ul>
    <h3>代码演示</h3>
    <!-- 基础用法 -->
    <div class="demo-block">
      <div class="demo-component">
        <tg-switch v-model:value="switchData1.checked" />
      </div>
      <div class="demo-desc">
        <span class="desc-title">基本用法</span>
        <div class="desc-text">最简单的用法</div>
      </div>
      <div class="demo-code" v-show="switchData1.visible">
        <code class="code-bg">
          <div class="code-text">
            绑定
            <code>v-model:value</code> 到一个
            <code>Boolean</code> 类型的变量。
          </div>
          <span class="code-tag">&lt;temlate&gt;</span>
          <span class="code-tag code-script-2">&lt;tg-switch v--model:value:"checked" /&gt;</span>
          <span class="code-tag">&lt;/temlate&gt;</span>
          <span class="code-tag" style="margin-top:20px">&lt;script lang="ts"&gt;</span>
          <span class="code-tag code-script-2">export default{</span>
          <span class="code-tag code-script-4">setup(){</span>
          <span class="code-tag code-script-6">const checked = ref(true);</span>
          <span class="code-tag code-script-4">}</span>
          <span class="code-tag code-script-2">};</span>
          <span class="code-tag">&lt;/script&gt;</span>
        </code>
      </div>
      <div class="demo-btns">
        <a href="javaScript:;">copy</a>
        <a href="javaScript:;" @click="toggleDemoCode1">{{switchData1.txt}}</a>
      </div>
    </div>
    <!-- 其他颜色 -->
    <div class="demo-block">
      <div class="demo-component">
        <div class="component-item">
          <span>primary:</span>
          <tg-switch v-model:value="switchData2.checked1" type="primary" />
        </div>
        <div class="component-item">
          <span>danger:</span>
          <tg-switch v-model:value="switchData2.checked2" type="danger" />
        </div>
        <div class="component-item">
          <span>success:</span>
          <tg-switch v-model:value="switchData2.checked3" type="success" />
        </div>
      </div>
      <div class="demo-desc">
        <span class="desc-title">其他配色</span>
        <div class="desc-text">开关的其他颜色</div>
      </div>
      <div class="demo-code" v-show="switchData2.visible">
        <code class="code-bg">
          <div class="code-text">
            通过
            <code>type</code>属性
            <code>String</code>类型的变量:
            <code style="margin-right:5px">danger</code>
            <code style="margin-right:5px">success</code>
            <code>primary</code> 改变颜色
          </div>
          <span class="code-tag">&lt;temlate&gt;</span>
          <span
            class="code-tag code-script-2"
          >&lt;tg-switch v--model:value:"checked" type="primary" /&gt;</span>
          <span
            class="code-tag code-script-2"
          >&lt;tg-switch v--model:value:"checked" type="danger" /&gt;</span>
          <span
            class="code-tag code-script-2"
          >&lt;tg-switch v--model:value:"checked" type="success" /&gt;</span>
          <span class="code-tag">&lt;/temlate&gt;</span>
        </code>
      </div>
      <div class="demo-btns">
        <a href="javaScript:;">copy</a>
        <a href="javaScript:;" @click="toggleDemoCode2">{{switchData2.txt}}</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Switch from "../lib/switch.vue";
import { ref, reactive } from "vue";
export default {
  components: { tgSwitch: Switch },
  setup() {
    const checked = ref(true);
    const switchData1 = reactive({
      checked: true,
      txt: "显示",
      visible: false,
    });
    const switchData2 = reactive({
      checked1: true,
      checked2: true,
      checked3: true,
      txt: "显示",
      visible: false,
    });
    const toggleDemoCode1 = () => {
      switchData1.visible = !switchData1.visible;
      switchData1.txt = switchData1.visible ? "隐藏" : "显示";
    };
    const toggleDemoCode2 = (key) => {
      switchData2.visible = !switchData2.visible;
      switchData2.txt = switchData2.visible ? "隐藏" : "显示";
    };
    return {
      checked,
      toggleDemoCode1,
      toggleDemoCode2,
      switchData1,
      switchData2,
    };
  },
};
</script>
<style lang="scss" scoped>
.switch-demo {
  > p {
    padding: 24px 0;
    color: #888;
  }
  > ul {
    color: #888;
    font-size: 14px;
    padding: 16px;
    list-style: circle;
    > li {
      padding: 8px;
    }
  }
  > .demo-block {
    box-shadow: 0 2px 8px #ddd;
    margin: 16px 0;
    > .demo-component {
      padding: 24px;
      > .component-item {
        display: flex;
        margin-bottom: 12px;
        > span {
          width: 70px;
          margin-right: 10px;
        }
      }
    }
    > .demo-desc {
      position: relative;
      padding: 16px 0;
      color: #888;
      border-top: 1px solid #ddd;
      > .desc-title {
        position: absolute;
        top: -10px;
        left: 16px;
        background: #fff;
        width: auto;
        padding: 0 8px;
        font-size: 14px;
      }
      > .desc-text {
        padding-left: 24px;
        font-size: 12px;
      }
    }
    > .demo-code {
      > code {
        display: block;
        padding: 12px 24px;
        line-height: 1.8;
        background: #fafafa;
        font-size: 12px;
        > .code-text {
          background: #fff;
          padding: 12px;
          border: 1px solid #ddd;
          margin-bottom: 24px;
          border-radius: 4px;
          > code {
            font-family: Menlo, Monaco, Consolas, Courier, monospace;
            background-color: #e6effb;
            padding: 4px 8px;
            border-radius: 3px;
          }
        }
        > .code-tag {
          color: #3182bd;
          display: block;
          font-family: Menlo, Monaco, Consolas, Courier, monospace;
        }
        > .code-script-2 {
          margin-left: 2em;
        }
        > .code-script-4 {
          margin-left: 4em;
        }
        > .code-script-6 {
          margin-left: 6em;
        }
      }
    }
    > .demo-btns {
      font-size: 12px;
      color: #888;
      text-align: center;
      padding: 12px 0;
      border-top: 1px dashed #ddd;
      > a {
        padding: 0 8px;
      }
    }
  }
}
</style>