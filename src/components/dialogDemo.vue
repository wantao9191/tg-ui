<template>
  <div>
    <wt-button @click="toggle1">点击打开Dialog</wt-button>
    <wt-dialog v-model:visible="dialogVisible1" :closeOnOverlay='false'>
      <div slot="header">标题</div>
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