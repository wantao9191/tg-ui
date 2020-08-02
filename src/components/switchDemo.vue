<template>
  <div>
    <h2>Switch 开关</h2>
    <p>表示两种相对立的状态间的切换，多用于触发开关。</p>
    <Switch v-model:value="checked" type='danger' />
  </div>
</template>
<script lang="ts">
import Switch from "../lib/switch.vue";
import { ref } from "vue";
export default {
  components: { Switch },
  setup() {
    const checked = ref(false);
    return { checked };
  },
};
</script>