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

