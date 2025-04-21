<template>
  <div class="about">
    <div class="about-container">
      <div class="about-left">
        <div v-html="aboutText" class="about-text"></div>
      </div>
      <div class="about-right">
        <img src="@/assets/logos/box-profile.webp" alt="profile" class="about-image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from "@/func/useFetch";
const { data: aboutText } = useFetch("about.json", "about");
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.about-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

@media screen and (max-width: 601px) {
  .about-container {
    flex-direction: column-reverse;
    width: 100%;
  }

  .about-right {
    margin-bottom: 20px;
  }
}

.about-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
}

.about-text {
  font-family: var(--style-font);
  font-size: 18px;
  color: var(--text-color);
  line-height: 1.5;
}

.about-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
}

.about-image {
  width: 100%;
  height: auto;
}
</style>
