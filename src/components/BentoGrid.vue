<template>
  <div class="bento">
    <div class="top"><HoverText text="Design. Develop. Inspire." /></div>
    <div class="bottom">
      <div class="btm1"><MarqueTechStack /> 
      <div class="tech-text">
        <h1>My Tech Stack</h1>
        <p>The Technologies I Use to build my projects</p>
      </div>
      </div>
      <div class="btm2"></div>
      <div class="btm3"></div>
    </div>
  </div>
</template>

<script setup>
import HoverText from "./sub-components/HoverText.vue";
import MarqueTechStack from "./sub-components/MarqueTechStack.vue";
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
  padding: 0 30px;
  background: var(--glass-color-05);
  backdrop-filter: blur(10px);
  border: var(--black-boarder);
  border-radius: 20px;
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
}

.bottom .btm2 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
  height: 10px;
  overflow: hidden;
  flex-grow: 1;
  width: 30%;
}

.bottom .btm3 {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
  height: 10px;
  overflow: hidden;
  width: 30%;
}

.tech-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  overflow: hidden;
  bottom: -110%;

  background: #00000090;
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
  /* line-height: 0%; */
  
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
