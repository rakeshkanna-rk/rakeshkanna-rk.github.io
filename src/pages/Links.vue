<template>
  <div class="page-wrapper space">
    <!-- Background Image -->
    <img
      src="@/assets/bg/light-bg.avif"
      class="bg-img"
      alt="background image"
      fetchpriority="high"
    />

    <!-- Foreground Content -->
    <div class="header">
      <img
        src="@/assets/logos/profile-pic.webp"
        alt="Logo"
        v-motion
        :initial="{ opacity: 0, scale: 0.7 }"
        :visible="{ opacity: 1, scale: 1 }"
        :duration="500"
      />
      <h1
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visible="{ opacity: 1, y: 0 }"
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
          :visible="{ opacity: 1, y: 0 }"
          :duration="300"
        >
          <img src="icons/globe.svg" />Website (Under Development)</a
        >
        <a
          class="cta-link"
          href="mailto:rakeshkanna0108@gmail.com"
          target="_blank"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0 }"
          :duration="300"
        >
          <img src="icons/mail.svg" />
          rakeshkanna0108@gmail.com
        </a>
      </div>
    </div>
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
  meta: [
    { name: "description", content: "Explore Rakesh Kanna's creative work — a portfolio featuring innovative web design, UI/UX, and full-stack development projects." },
    { name: "keywords", content: "Rakesh Kanna, Portfolio, Web Developer, Designer, UI UX, Vue Developer" },
    { name: "author", content: "Rakesh Kanna" },
    { property: "og:title", content: "Rakesh Kanna | Portfolio" },
    { property: "og:description", content: "Take a look at Rakesh Kanna's curated web creations, design experiments, and dev builds." },
    { property: "og:image", content: "https://rakeshkanna-rk.github.io/assets/preview.jpg" }, // <-- Update with your preview image URL
    { property: "og:url", content: "https://rakeshkanna-rk.github.io" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "https://rakeshkanna-rk.github.io/assets/preview.jpg" },
    { name: "robots", content: "index, follow" }
  ],
  link: [
    { rel: "canonical", href: "https://rakeshkanna-rk.github.io" }
  ]
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

.links {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
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
}
</style>
