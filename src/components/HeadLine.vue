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
      :duration="500"
    >
      {{ headLine.title }}
    </h1>
    <Shimmer
      :text="headLine.single"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visible-once="{ opacity: 1, y: 0 }"
      :duration="500"
      :delay="200"
    />
    <p
      class="content"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :visible-once="{ opacity: 1, y: 0 }"
      :duration="500"
      :delay="400"
    >
      {{ headLine.content }}
    </p>

    <div class="cta">
      <GlassButton
        @openForm="showForm = true"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :duration="500"
        :delay="600"
      />
      <EmailCopy
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :duration="500"
        :delay="800"
      />
    </div>

    <ContactForm
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
import Shimmer from "./sub-components/Shimmer.vue";
import GlassButton from "./buttons/GlassButton.vue";
import ContactForm from "./ContactForm.vue";
import ProjHeadBtn from "./sub-components/ProjHeadBtn.vue";
import EmailCopy from "./buttons/EmailCopy.vue";
import { useFetchData } from "@/func/useFetchData";

const showForm = ref(false);

const url =
  "https://rakeshkanna-rk.github.io/database/portfolio/headLines.json";
const { data: headLine, isLoading, error } = useFetchData(url, "headLine");

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
