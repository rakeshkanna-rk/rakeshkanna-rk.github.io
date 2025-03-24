<template>
  <div class="prj-option">
    <div class="image-holder">
      <img class="image" :src="img" />
      <div class="field">{{ field }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectOption",
  props: {
    img: String,
    field: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.prj-option {
  border-radius: 35px;
  border-style: solid;
  border-color: var(--white-color);
  border-width: 0.78px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

.image-holder {
  background: var(--white-color);
  border-radius: 78.12px;
  padding: 10px;
  gap: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

.image {
  flex-shrink: 0;
  width: 18.75px;
  height: 18.75px;
  position: relative;
  overflow: visible;
}

.field {
  color: #050505;
  text-align: left;
  font-family: "Archivo", sans-serif;
  font-size: 18.75px;
  font-weight: 400;
  position: relative;
}

</style>
