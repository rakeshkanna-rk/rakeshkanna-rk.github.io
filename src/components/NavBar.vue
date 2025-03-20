<template>
  <div class="navbar">
    <img
      class="logo"
      src="../assets/logo.svg"
      v-motion
      :initial="{ opacity: 0, y: -50 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="500"
    />/>

    <div
      class="social-link-container"
      v-motion
      :initial="{ opacity: 0, y: -50 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="500"
    >
      <SocialLink
        v-for="(social, index) in socialLinks"
        :key="index"
        :link="social.link"
        :img="social.img"
        :title="social.title"
      />
    </div>

    <div
      class="low-social-link-container"
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="500"
    >
      <div class="holder">
        <LowSocialLink
          v-for="(social, index) in socialLinks"
          :key="index"
          :link="social.link"
          :img="social.img"
          :title="social.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
import socialLinks from "../data/socialLinks.json";
import SocialLink from "../components/SocialLink.vue";
import LowSocialLink from "../components/LowSocialLink.vue";

export default {
  name: "NavBar",

  components: {
    SocialLink,
    LowSocialLink,
  },

  data() {
    return {
      socialLinks,
    };
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}

.social-link-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  gap: 18px;
}

.low-social-link-container {
  /*W3C*/
  display: none;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
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
  .social-link-container {
    display: none;
  }
  .low-social-link-container {
    display: block;
  }
  .navbar {
    justify-content: center;
  }

  .logo {
    height: 45px;
    width: auto;
  }
}
</style>
