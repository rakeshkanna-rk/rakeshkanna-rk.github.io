<template>
  <div
    class="low-social-link-container"
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :visible="{ opacity: 1, y: 0 }"
    :duration="500"
  >
    <div class="holder">
      <SocialLink
        v-for="(social, index) in socialLinks"
        :key="index"
        :link="social.link"
        :img="social.img"
        :title="social.title"
      />
    </div>
  </div>
</template>

<script>
import SocialLink from "./sub-components/SocialLink.vue";
import socialLinks from "../data/socialLinks.json";

export default {
  name: "MobiSocialLink",
  components: {
    SocialLink,
  },

  data() {
    return {
      socialLinks,
    };
  },
};
</script>

<style scoped>
.low-social-link-container {
  /*W3C*/
  display: none;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(5px);
  z-index: 1;
  /* border: 2px solid rgba(255, 255, 255, 0.1); */
  outline: 2px solid rgba(255, 255, 255, 0.1);
  
}

.holder {
  display: flex;
  flex-direction: row;
  gap: 18px;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

@media screen and (max-width: 601px) {
  .low-social-link-container {
    display: block;
  }
}
</style>
