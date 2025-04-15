<template>
  <!-- Background Image -->
  <img
    src="@/assets/bg/bluelight-bg.svg"
    class="bg-img"
    alt="background image"
  />
  <div class="download-wrapper">
    <h2>Preparing your download...</h2>
    <p v-if="fileUrl">
      If your download hasn't started,
      <a :href="fileUrl" download>click here</a>.
    </p>
    <p v-else>Invalid file name.</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, computed } from "vue";

const route = useRoute();
const fileName = route.params.fileName;

// Optional: restrict allowed file types or sanitize if needed
const fileUrl = computed(() => {
  if (!fileName) return null;
  // prevent any kind of path traversal attacks
  const safeName = fileName.replace(/[^a-zA-Z0-9_.-]/g, "");
  return `/docs/${safeName}`;
});

onMounted(() => {
  if (fileUrl.value) {
    const link = document.createElement("a");
    link.href = fileUrl.value;
    link.setAttribute("download", "");
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
