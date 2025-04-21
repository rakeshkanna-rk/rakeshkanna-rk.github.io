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
  </div>
    
    <SpinningWheel />

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
</template>

<script setup>
import HeadLine from "@/components/HeadLine.vue";
import BentoGrid from "@/components/BentoGrid.vue";
import SpinningWheel from "@/components/sub-components/SpinningWheel.vue";
import MarqueText from "@/components/marque/MarqueText.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import Showcase from "@/components/Showcase.vue";
import ShowcaseMobi from "@/components/ShowcaseMobi.vue";

import { useHead } from "@vueuse/head";

useHead({
  title: "Rakesh Kanna | Creative Developer & Designer",
});
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
