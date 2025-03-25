<template>
  <Cursor />
  <Particles />
  <NavBar />
  <MobiSocialLink />
  <router-view></router-view>
  <ContactForm
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0 }"
        :duration="500"
        :isOpen="showForm"
        @close="showForm = false"
      />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import MobiSocialLink from "./components/MobiSocialLink.vue";
import Particles from "./components/Particles.vue";
import ContactForm from "./components/ContactForm.vue";
import Cursor from "./components/sub-components/Cursor.vue";


export default {
  name: "Home",
  components: {
    NavBar,
    MobiSocialLink,
    Particles,
    ContactForm,
    Cursor
  },

  data() {
    return {
      showForm: false
    };
  },
};

</script>


