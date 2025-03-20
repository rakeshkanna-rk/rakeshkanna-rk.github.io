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
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import HeadLine from "./components/HeadLine.vue";
import Particles from "./components/Particles.vue";

export default {
  name: "App",
  components: {
    Particles,
    NavBar,
    HeadLine
  },

  data() {
    return {};
  },
};
</script>

<style>

#app {
  padding: 30px 80px;
}

@media screen and (max-width: 600px) {
  #app {
    padding: 30px 30px;
  }
}

</style>
