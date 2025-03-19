<template>
  <div>
    <Particles />
      <NavBar />
    <div v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="500"
      >
      <HeadLine />
    </div>
    <FieldList />
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import HeadLine from "./components/HeadLine.vue";
import Particles from "./components/Particles.vue";
import FieldList from "./FieldList.vue";

export default {
  name: "App",
  components: {
    Particles,
    NavBar,
    HeadLine,
    FieldList,
  },

  data() {
    return {};
  },
};
</script>

<style>
body {
  background: var(--bg-color);
  margin: 0;
  cursor: url("./assets/cursor.svg"), pointer;
}

#app {
  padding: 30px 80px;
}

@media screen and (max-width: 600px) {
  #app {
    padding: 30px 30px;
  }
}
</style>
