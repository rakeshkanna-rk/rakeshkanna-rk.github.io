<template>
  <div class="bento">
    <div class="top"><HoverText text="Design. Develop. Inspire." /></div>
    <div class="bottom">
      <div class="btm1">
        <MarqueTechStack />
        <div class="tech-text">
          <h1>Code & Creativity</h1>
          <p>
            Driven by Innovation, Fueled by Modern Development Technologies.
          </p>
          <router-link
            class="tech-know-more"
            :to="{ path: '/', hash: '#skills' }"
            >Know More
            <img src="@/assets/arrow-right-white.svg" alt="arrow-right" />
          </router-link>
        </div>
      </div>
      <div class="btm2">
        <LogoWing />
      </div>
      <div class="btm3">
        <MarqueProjects />
      </div>
    </div>
  </div>
</template>

<script setup>
import HoverText from "./sub/HoverText.vue";
import MarqueTechStack from "./marque/MarqueTechStack.vue";
import LogoWing from "./sub/LogoWing.vue";
import MarqueProjects from "./marque/MarqueProjects.vue";
</script>

<style scoped>
.bento {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: var(--padding);
  gap: 10px;
}

.top {
  display: flex;
  align-items: center;
  justify-self: center;
  flex-grow: 1;
  padding: 0 30px;
  background: var(--glass-color-05);
  backdrop-filter: blur(10px);
  border: var(--black-boarder);
  border-radius: 20px;
  justify-content: center;
}

.bottom .btm1,
.bottom .btm2,
.bottom .btm3 {
  display: flex;
  align-items: center;
  align-self: stretch;
  background: var(--glass-color-05);
  backdrop-filter: blur(10px);
  border: var(--black-boarder);
  border-radius: 20px;
  width: calc((100% / 3) - 30px);
}

.top {
  font-family: var(--primary-font);
  font-weight: 900;
  font-size: var(--h1);
  text-align: center;
}

.bottom {
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  gap: 10px;
}

.bottom .btm1 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  overflow: hidden;
  padding: 0 30px;
}

.bottom .btm2 {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-grow: 1;
  /* width: 30%; */
}

.bottom .btm3 {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* width: 30%; */
}

.tech-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  overflow: hidden;
  bottom: -110%;

  background: #000000b8;
  backdrop-filter: blur(10px);
  color: var(--white-color);
  border: var(--black-boarder);
  font-family: var(--primary-font);
  padding: 10px 50px;

  width: 90%;
  height: 100%;
  transition: all 0.5s ease-in-out;
}

.tech-text h1 {
  font-weight: 900;
  font-size: var(--h2);
  text-align: center;
  line-height: 0%;
}

.tech-text p {
  font-weight: normal;
  color: var(--white-color);
  font-size: var(--h3);
  text-align: center;
  align-self: stretch;
}

.btm1:hover .tech-text {
  bottom: 0;
}

.btm2:hover .tech-text {
  bottom: 0;
}

.tech-know-more {
  color: var(--white-color);
  display: flex;
  text-align: center;
  justify-content: center;
  font-family: var(--primary-font);
  font-size: var(--h3);
  font-weight: 600;
  position: relative;
  padding: 10px 20px;
  background-color: #000000c3;
  border-radius: 20px;
  text-decoration: none;
  gap: 15px;
  border: 1px solid var(--white-color);
}

@media screen and (max-width: 601px) {
  .bento {
    padding: 0;
    margin: 0 15px;
    margin-bottom: 100px;
  }
  .top {
    font-size: var(--h2);
  }
  .bottom .btm1,
  .bottom .btm2 {
    width: 100%;
  }
}
</style>
