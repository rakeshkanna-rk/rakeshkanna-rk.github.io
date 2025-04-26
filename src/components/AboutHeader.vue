<script setup>
import { useMarkdown } from "@/composables/useMarkdown.js";

const { content } = useMarkdown("/content/about.md"); // path relative to /public
</script>

<template>
  <header class="about-header">
    <div class="about-text">
      <h2>Hi, I'm Rakesh Kanna</h2>
      <p v-html="content"></p>
    </div>
    <div class="about-img">
      <img src="@/assets/logos/box-profile.webp" alt="profile" />
    </div>
  </header>
</template>

<style scoped>
.about-header {
  font-family: var(--primary-font);
  display: flex;
  flex-wrap: wrap-reverse;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  color: var(--white-color);
  text-align: center;
  padding: 80px;
}

.about-text {
  margin: 0 auto;
  text-align: left;
  width: 40%;
}

.about-text h2 {
  font-weight: 600;
  font-size: var(--h1);
  text-align: left;
}

.about-text p {
  font-weight: normal;
  font-size: var(--h3);
  text-align: left;
  line-height: 1.3;
}

.about-img {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 30%;
}

.about-img img {
  width: 100%;
  border-radius: 0.75rem;
  object-fit: cover;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 900px) {
  .about-header {
    padding: 30px;
  }
  .about-text {
    width: 100%;
  }
  .about-text h2 {
    font-size: var(--h2);
  }

  .about-text p {
    font-size: var(--p);
  }

  .about-img {
    width: 80%;
  }
}

</style>
