<template>
  <div class="under-dev">
    <h1>Under Development</h1>
    <p>You will be able to see the page once it is developed</p>
    <router-link to="/" class="home-link">Go Back Home</router-link>
  </div>
</template>

<script>
export default {
  name: "UnderDev",
};
</script>

<style scoped>
.under-dev {
  display: flex;
  flex-direction: column;
  font-family: var(--style-font);
  background-color: var(--bg-color);
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 50vh;
}

h1 {
  font-size: 70px;
  color: #fff;
  text-shadow: 0 0 50px #00E5FF, 0 0 20px #00E5FF, 0 0 40px #00E5FF;
}

@media screen and (max-width: 601px){
    h1 {
        font-size: 50px;
    }
    
}

p {
  font-size: 18px;
  color: rgb(224, 224, 224);
}

.home-link {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}
</style>
