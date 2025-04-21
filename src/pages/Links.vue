<template>
  <div class="page-wrapper">
    <!-- Background Image -->
    <img
    src="@/assets/bg/light-bg.avif"
    class="bg-img"
    alt="background image"
    fetchpriority="high"
    loading="lazy"
    />
  </div>
    
    <!-- Foreground Content -->
    <div class="header">
      <img
        src="@/assets/logos/profile-pic.webp"
        alt="Logo"
        v-motion
        :initial="{ opacity: 0, scale: 0.7 }"
        :visible-once="{ opacity: 1, scale: 1 }"
        :duration="500"
      />
      <h1
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :duration="500"
      >
        Designer | Developer
      </h1>
      <div class="cta">
        <a
          class="cta-link"
          href="/"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="300"
        >
          <img src="icons/globe.svg" alt="globe"/>Website (Under Development)</a
        >
        <a
          class="cta-link"
          href="mailto:rakeshkanna0108@gmail.com"
          target="_blank"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="300"
        >
          <img src="icons/mail.svg" alt="mail"/>
          rakeshkanna0108@gmail.com
        </a>
      </div>
    </div>
    <div class="links-wrapper">
      <div class="links" v-for="(link, index) in links" :key="index">
        <component
        :is="link.external === false ? 'router-link' : 'a'"
        :to="link.external === false ? link.link : null"
        :href="link.external !== false ? link.link : null"
        :target="link.external !== false ? '_blank' : null"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0 }"
        :duration="500"
        :delay="index * 200"
        class="link-item"
        >
        <img :src="link.img" alt="Links" />
        {{ link.title }}
      </component>
    </div>
  </div>
</template>

<script setup>
// import links from "@/data/links.json";
import { useFetchData } from "@/func/useFetchData";
import { useHead } from "@vueuse/head"

const url = "https://rakeshkanna-rk.github.io/database/portfolio/links.json";
const { data: links, isLoading, error } = useFetchData(url, "links");

useHead({
  title: "Rakesh Kanna | Links",
})

</script>

<style scoped>
.space {
  padding-bottom: 150px;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  position: relative;
}

.header h1 {
  font-family: var(--primary-font);
  color: var(--white-color);
  font-size: var(--h3);
}

.header img {
  height: 15vh;
}

.cta {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.cta a {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--white-color);
  font-family: var(--primary-font);
  font-size: var(--p);
  padding: 10px 20px;
  background: var(--glass-color-05);
  backdrop-filter: blur(6.5px);
  border-radius: 100px;
  opacity: 0.8;
  transition: all 0.3s ease-in;
}

.cta a:hover {
  scale: 1.05;
  border: 0.5px solid var(--white-color);
}

.cta-link img {
  height: 20px;
  margin-right: 10px;
}

.links-wrapper{
  display: flex;
  flex-direction: column;
  padding: 20px 0 150px 0;
  gap: 20px;
}
.link-wrapper:last-child {
  padding-bottom: 150px;
}

.links {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  /* margin-top: 20px; */
  z-index: 1;
  position: relative;
  font-family: var(--primary-font);
  cursor: pointer;
}

.links a {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
  text-decoration: none;
  color: var(--white-color);
  background: var(--glass-color-05);
  padding: 15px 20px;
  border-radius: 20px;
  font-size: var(--h3);
  margin: 0 10px;
  backdrop-filter: blur(6.5px);
  width: 100%;
  max-width: 500px;
  border: 0.1px solid #ffffff3e;
}

.links img {
  position: absolute;
  left: 20px;
  width: 30px;
  height: 30px;
}


</style>
