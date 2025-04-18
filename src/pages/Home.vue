<template>
  <div id="home page-wrapper">
    <!-- Background Image -->
    <img
      src="@/assets/bg/stone-bg.avif"
      class="bg-img"
      id="desktop-bg"
      alt="background image"
      fetchpriority="high"
    />
    <img
      src="@/assets/bg/mobi-stone-bg.avif"
      class="bg-img"
      id="mobile-bg"
      alt="background image"
      fetchpriority="high"
    />

    <DraggableBox />

    <div class="hero">
      <HeadLine />
    </div>

    <BentoGrid />

    <MarqueText />

    <SectionHeader
      :subheading="'PROJECT SHOWCASE'"
      :mainHeading="'Curated'"
      :shimmerText="'Creations'"
    />

    <Showcase />

    <ShowcaseMobi />
  </div>
</template>

<script setup>
import HeadLine from "@/components/HeadLine.vue";
import BentoGrid from "@/components/BentoGrid.vue";
import DraggableBox from "@/components/sub-components/DraggableBox.vue";
import MarqueText from "@/components/marque/MarqueText.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import Showcase from "@/components/Showcase.vue";
import ShowcaseMobi from "@/components/ShowcaseMobi.vue";

import { useHead } from "@vueuse/head"

useHead({
  title: "Rakesh Kanna | Creative Developer & Designer",
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
.hero {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  align-self: stretch;
  width: 100%;
  height: 80vh;
}

@media screen and (max-width: 601px) {
  .hero {
    height: 70vh;
  }
}
</style>
