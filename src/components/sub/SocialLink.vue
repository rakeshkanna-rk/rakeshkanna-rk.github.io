<template>
  <a
    class="social-link"
    :href="link"
    :title="title"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="social">
      <img class="image" :src="img" :alt="title" />
    </div>
  </a>
</template>

<script>
export default {
  name: "SocialLink",
  props: {
    link: String,
    title: String,
    img: String,
  },
};
</script>

<style scoped>

.social-link {
  border-radius: 100%;
  transition: all 0.5s linear;
}

.social-link:hover {
  background-color: var(--glass-color-04);
  filter: drop-shadow(0 0 5px #149ed4);
}

.social:hover {
  scale: 1.2;
  filter: drop-shadow(0 0 5px #149ed4);
}
</style>

