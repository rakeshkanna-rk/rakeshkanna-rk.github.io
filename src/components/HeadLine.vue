<template>
  <div class="header">
    <h1 class="title">{{ headLine.title }}</h1>
    <p class="content">{{ headLine.content }}</p>
  </div>
</template>

<script>
import headLine from "../data/headLines.json";

export default {
  name: "HeadLine",
  data() {
    return {
      headLine,
    };
  },
};
</script>

<style>
.header {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  padding: 30px 0 0 0;
}

.content {
  color: #fefefe;
  text-align: center;
  font-family: var(--h-font);
  font-size: 16px;
  font-weight: 400;
  position: relative;
  max-width: 800px;
}

.title {
  color: #fefefe;
  text-align: center;
  font-family: var(--h-font);
  font-size: 32px;
  font-weight: 800;
  position: relative;
  margin: 0;
}

@media screen and (max-width: 600px) {
  .title {
    font-size: 24px;
    line-height: 35px;
  }
  .content {
    font-size: 12px;
  }
  .header {
    gap: 0;
  }

}
</style>
