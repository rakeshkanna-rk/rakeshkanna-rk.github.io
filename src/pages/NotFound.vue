<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Oops! The page you are looking for does not exist.</p>
    <p>
      Redirecting to the home page in
      <span class="countdown">{{ countdown }}</span> seconds...
    </p>
    <router-link to="/" class="home-link">Go Back Home</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const countdown = ref(5);
const router = useRouter();

onMounted(() => {
  const interval = setInterval(() => {
    countdown.value--;
    if (countdown.value < 0) {
      clearInterval(interval);
      router.push("/");
    }
  }, 1000);
});
</script>

<style scoped>
.not-found {
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
  font-size: 170px;
  color: #fff;
  text-shadow: 0 0 50px #00E5FF, 0 0 20px #00E5FF, 0 0 40px #00E5FF;
  letter-spacing: 0.1em;
  line-height: .5;
  cursor: url("../assets/click-cursor.svg"), pointer;
}

p {
  font-size: 18px;
  color: rgb(224, 224, 224);
}

.countdown {
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
}

.home-link {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}
</style>
