<template>
  <!-- Background Image -->
  <img
    src="@/assets/bg/sidelight-bg.avif"
    class="bg-img"
    id="desktop-bg"
    alt="background image"
    fetchpriority="high"
    loading="lazy"
  />
  <img
    src="@/assets/bg/mobi-sidelight-bg.avif"
    class="bg-img"
    id="mobile-bg"
    alt="background image"
    fetchpriority="high"
    loading="lazy"
  />

  <AboutHeader />
  <div class="timeline-container">
    <TimelineItem />
  </div>

  <SectionHeader
    :subheading="'TOOLS & TECHNOLOGIES'"
    :mainHeading="'Tech'"
    :shimmerText="'Stack'"
    />
  <TechStack />

  <SectionHeader
    :subheading="'REAL STORIES'"
    :mainHeading="'Voices'"
    :shimmerText="'Heard'"
  />
  <FeedBack />
</template>

<script setup>
import TimelineItem from "@/components/TimelineItem.vue";
import AboutHeader from "@/components/AboutHeader.vue";
import TechStack from "@/components/TechStack.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import FeedBack from "@/components/FeedBack.vue";
import { useHead } from "@vueuse/head"

useHead({
  title: "Rakesh Kanna | About",
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
