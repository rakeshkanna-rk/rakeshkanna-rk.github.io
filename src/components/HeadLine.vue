<template>
  <div class="header">
    <h1 class="title">{{ headLine.title }}</h1>
    <Shimmer :text="headLine.single" />
    <p class="content">{{ headLine.content }}</p>
  </div>
</template>

<script>
import headLine from "../data/headLines.json";
import Shimmer from "./sub-components/Shimmer.vue";

export default {
  name: "HeadLine",
  components: {
    Shimmer,
  },
  data() {
    return {
      headLine,
    };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  padding: 100px 0;
}

p {
  color: #fefefe;
  text-align: center;
  font-family: var(--h-font);
  font-size: var(--h3);
  font-weight: 400;
  position: relative;
  max-width: 800px;
}

h1 {
  color: #fefefe;
  text-align: center;
  font-family: var(--primary-font);
  font-size: var(--h1);
  font-weight: 700;
  position: relative;
  margin: 0;
  max-width: 800px;
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 28px;
    line-height: 1.7em;
  }
  p {
    font-size: 18px;
    line-height: 1.75em;
  }
  .header {
    padding: 70px 15px;
    gap: 0;
  }
}
</style>
