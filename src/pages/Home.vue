<template>
  <div id="home page-wrapper">
    <!-- Background Image -->
    <img
      src="@/assets/bg/stone-bg.svg"
      class="bg-img"
      id="desktop-bg"
      alt="background image"
    />
    <img
      src="@/assets/bg/mobi-stone-bg.svg"
      class="bg-img"
      id="mobile-bg"
      alt="background image"
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

    <Showcase/>

    <ShowcaseMobi/>
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
