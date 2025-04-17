<template>
  <!-- Background Image -->
  <img
    src="@/assets/bg/bluelight-bg.avif"
    class="bg-img"
    alt="background image"
    fetchpriority="high"
  />

  <div class="download-wrapper">
    <h2>Preparing your download...</h2>
    <p v-if="fileUrl">
      If your download hasn't started,
      <a :href="fileUrl" download>click here</a>.
    </p>
    <p v-else>Invalid file name.</p>
    <router-link to="/" class="home-link">Go Back Home</router-link>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, computed } from "vue";

const route = useRoute();
const fileName = route.params.fileName;

// ✅ Extract safeName to reuse it in both places
const safeName = fileName ? fileName.replace(/[^a-zA-Z0-9_.-]/g, "") : null;

// ✅ Now computed uses it
const fileUrl = computed(() => {
  return safeName ? `/downloads/${safeName}` : null;
});

onMounted(() => {
  if (fileUrl.value) {
    const link = document.createElement("a");
    link.href = fileUrl.value;
    link.setAttribute("download", safeName); // ✅ This now works
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
});
</script>

<style scoped>
.download-wrapper {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--primary-font, sans-serif);
  color: var(--white-color, #fff);
  text-align: center;
  padding: 20px;
}
a {
  color: #00bfff;
  text-decoration: underline;
}
</style>
