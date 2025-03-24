<template>
  <div class="header">
    <ProjHeadBtn
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="250"
      />
    <h1
      class="title"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="500"
    >
      {{ headLine.title }}
    </h1>
    <Shimmer
      :text="headLine.single"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="500"
      :delay="200"
    />
    <p
      class="content"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="500"
      :delay="400"
    >
      {{ headLine.content }}
    </p>
    <GlassButton
      @openForm="showForm = true"
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="500"
      :delay="600"
    />

    <ContactForm
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :visible="{ opacity: 1, y: 0 }"
      :duration="500"
      :isOpen="showForm"
      @close="showForm = false"
    />
  </div>
</template>

<script>
import headLine from "../data/headLines.json";
import Shimmer from "./sub-components/Shimmer.vue";
import GlassButton from "./sub-components/GlassButton.vue";
import ContactForm from "./ContactForm.vue";
import ProjHeadBtn from "./sub-components/ProjHeadBtn.vue";

export default {
  name: "HeadLine",
  components: {
    Shimmer,
    GlassButton,
    ContactForm,
    ProjHeadBtn,
  },
  data() {
    return {
      headLine,
      showForm: false,
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
  padding: 30px 0;
}

p {
  color: var(--white-color);
  text-align: center;
  font-family: var(--h-font);
  font-size: var(--h3);
  font-weight: 400;
  position: relative;
  max-width: 800px;
}

h1 {
  color: var(--white-color);
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
    padding: 30px 15px;
    gap: 0;
  }
}
</style>
