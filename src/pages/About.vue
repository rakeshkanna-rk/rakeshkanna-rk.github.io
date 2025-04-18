<template>
  <!-- Background Image -->
  <img
    src="@/assets/bg/sidelight-bg.avif"
    class="bg-img"
    id="desktop-bg"
    alt="background image"
    fetchpriority="high"
  />
  <img
    src="@/assets/bg/mobi-sidelight-bg.avif"
    class="bg-img"
    id="mobile-bg"
    alt="background image"
    fetchpriority="high"
  />

  <div class="timeline-container">
    <TimelineItem />
  </div>
</template>

<script setup>
import TimelineItem from "../components/TimelineItem.vue";
import { useHead } from "@vueuse/head"

useHead({
  title: "Rakesh Kanna | About",
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
#desktop-bg {
  display: block;
}

#mobile-bg {
  display: none;
}

@media screen and (max-width: 601px) {
  #desktop-bg {
    display: none;
  }

  #mobile-bg {
    display: block;
  }
}

.timeline-container {
  margin: 5rem 10rem;
}

@media screen and (max-width: 1024px) {
  .timeline-container {
    margin: 5rem 2rem;
  }
}

@media screen and (max-width: 601px) {
  .timeline-container {
    margin: 5rem 1rem 2rem 0;
  }
}
</style>
