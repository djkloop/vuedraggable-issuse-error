<!--
 * @Author        : djkloop
 * @Date          : 2020-09-04 17:30:40
 * @LastEditors   : djkloop
 * @LastEditTime  : 2020-09-07 12:10:53
 * @Description   : generate form with form-create
 * @FilePath      : /vd/src/views/FcForm.vue
-->
<style lang="scss">
.fc-form,
.el-form {
  height: 100%;

  & > .el-row {
    height: 100%;

    .fc-drag-main {
      height: 100%;

      .fc-drag-transition {
        height: 100%;
      }
    }
  }
}
</style>
<template>
  <div class="fc-form">
    <form-create v-model="fApi" :rule="rules" :option="options"></form-create>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, ref } from "@vue/composition-api";

export default defineComponent({
  name: "fc-form",
  setup() {
    /// json to form with form-create
    /// http://www.form-create.com/v2/element-ui/components/input.html
    const state = reactive({
      // instance
      fApi: {},
      // form-create-rules
      rules: [],
      // form-create-options
      options: {
        submitBtn: false,
        resetBtn: false
      }
    });

    /// main data list
    const baseList = ref([]);
    const draggableOptions = ref({
      group: "dragGroup",
      ghostClass: "fc-drage-moving",
      animation: 180
    });

    /// init draggable component
    const initDraggableItem = reactive({
      type: "draggable",
      props: {
        list: baseList.value,
        tag: "div"
      },
      attrs: {
        ...draggableOptions.value
      },
      class: "fc-drag-main",
      children: [
        {
          type: "transition-group",
          props: {
            name: "fc-drag-list",
            tag: "div"
          },
          class: "fc-drag-transition",
          children: baseList.value,
          native: true
        }
      ],
      on: {
        add: () => {
          console.log(baseList.value);
        }
      },
      native: true
    });
    state.rules.push(initDraggableItem);
    return {
      ...toRefs(state)
    };
  }
});
</script>

<style></style>
