<template>
  <div class="list">
    <ProjectOption :img="`./assets/design.svg`" :field="`Design`" />
    <ProjectOption :img="`./assets/develop.svg`" :field="`Development`" />
  </div>
</template>

<script>
import ProjectOption from "./components/ProjectOption.vue";

export default {
  name: "FieldList",
  components: {
    ProjectOption,
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding: 30px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}
</style>
