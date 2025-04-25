<script setup>
const description = `I’m a passionate designer, developer, writer, and technician with 1.5 years of hands-on experience turning ideas into engaging digital experiences. I specialize in UI/UX design, crafting intuitive interfaces, posters, and promotional materials, and I bring those designs to life through web development.
Beyond building and designing, I enjoy sharing knowledge through my blog—writing about design principles, programming, and the evolving world of AI.

I’m always exploring, learning, and creating. Join me on this journey of innovation and creativity!`;
</script>

<template>
  <header class="about-header">
    <div class="about-text">
      <h2>Hi, I'm Rakesh Kanna</h2>
      <p v-for="(paragraph, index) in description.split('\n')" :key="index">{{ paragraph }}</p>
    </div>
  </header>
</template>
