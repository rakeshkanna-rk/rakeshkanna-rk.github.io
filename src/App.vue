<template>
  <Particles />
  <NavBar />
  <MobiSocialLink />
  <router-view></router-view>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import MobiSocialLink from "./components/MobiSocialLink.vue";
import Particles from "./components/Particles.vue";


export default {
  name: "Home",
  components: {
    NavBar,
    MobiSocialLink,
    Particles
  },

  data() {
    return {};
  },
};

</script>
