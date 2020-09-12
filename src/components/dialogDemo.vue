<template>
  <div>
    <wt-button @click="toggle1">点击打开Dialog</wt-button>
    <wt-dialog v-model:visible="dialogVisible1" :closeOnOverlay="false" center>
      <template v-slot:title>标题111111</template>
      <div>11111111111</div>
      <template v-slot:footer>
        <wt-button @click="dialogVisible1=false">关闭</wt-button>
        <wt-button @click="dialogVisible1=false" type="primary">确定</wt-button>
      </template>
    </wt-dialog>
  </div>
</template>
<script lang="ts">
import dialog from "../lib/dialog.vue";
import button from "../lib/button.vue";
import { ref } from "vue";
export default {
  components: { wtDialog: dialog, wtButton: button },
  setup() {
    const dialogVisible1 = ref(false);
    const toggle1 = () => {
      dialogVisible1.value = true;
    };
    return { dialogVisible1, toggle1 };
  },
};
</script>