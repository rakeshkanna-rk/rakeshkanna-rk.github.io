<template>
  <div class="header">
    <ProjHeadBtn
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :visible-once="{ opacity: 1, y: 0 }"
      :duration="250"
    />
    <h1
      class="title"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visible-once="{ opacity: 1, y: 0 }"
      :duration="300"
    >
      Designing & Developing with Creativity & Code
    </h1>
    <Shimmer
      :text="'Creative Technologist'"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visible-once="{ opacity: 1, y: 0 }"
      :duration="300"
      :delay="50"
    />
    <p
      class="content"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visible-once="{ opacity: 1, y: 0 }"
      :duration="300"
      :delay="100"
    >
      Hello 👋 I'm Rakesh Kanna, Designer & Jr.Full Stack Developer
    </p>

    <div class="cta">
      <GlassButton
        @openForm="showForm = true"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :duration="300"
        :delay="150"
      />
      <EmailCopy
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :duration="300"
        :delay="200"
      />
    </div>

    <ContactForm
      v-if="showForm"
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :visible-once="{ opacity: 1, y: 0 }"
      :duration="500"
      :isOpen="showForm"
      @close="showForm = false"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Shimmer from "./sub/Shimmer.vue";
import GlassButton from "./buttons/GlassButton.vue";
import ContactForm from "./ContactForm.vue";
import ProjHeadBtn from "./sub/ProjHeadBtn.vue";
import EmailCopy from "./buttons/EmailCopy.vue";

const showForm = ref(false);
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
  font-family: var(--primary-font);
  font-size: var(--h3);
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

.cta {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
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
  .cta {
    flex-direction: column;
  }
}
</style>
