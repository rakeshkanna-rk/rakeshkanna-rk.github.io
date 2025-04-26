<template>
  <Cursor />
  <NavBar />
  <MobiSocialLink />
  <router-view></router-view>
  <ContactForm
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :visible="{ opacity: 1, y: 0 }"
    :duration="500"
    :isOpen="showForm"
    @close="showForm = false"
  />
  <Footer v-if="showFooter"/>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import MobiSocialLink from "./components/MobiSocialLink.vue";
import ContactForm from "./components/ContactForm.vue";
import Cursor from "./components/Cursor.vue";
import Footer from "./components/Footer.vue";

const showForm = false;

import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Add paths (or route names) where you want to hide the footer
const noFooterRoutes = ['NotFound', 'Link'] // Use route names for clarity

const showFooter = computed(() => {
  return !noFooterRoutes.includes(route.name)
})
</script>
