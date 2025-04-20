<template>
  <router-link :to="'/projects'" class="glass-button">
    <div class="new-text">
      <p>New!</p>
    </div>
    <div class="proj-text">
      <p>Upcoming Projects</p>
    </div>
    <div class="icon">
      <img src="@/assets/chevron-right.svg" alt="arrow" />
    </div>
  </router-link>
</template>

<script >
export default {
  name: "ProjHeadBtn",
}
</script>

<style scoped>
.glass-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 100px;
  padding: 5px 10px 5px 5px;
  background: #161616;
  border-radius: 100px;
  border: 1px solid #313131;
  text-decoration: none;
  transition: background 0.3s ease-in-out;
  font-size: 12px;
  margin: 20px;
}

.glass-button:hover {
  border: 1px solid #828282;
}

.new-text {
  color: var(--white-color);
  font-family: var(--primary-font);
  line-height: 0.2;
  padding: 0px 15px;
  background: var(--dark-blue-color);
  border-radius: 100px;
  font-weight: 600;
  transition: rotate 0.3s ease-in;
}

.proj-text {
  font-weight: 600;
  color: var(--white-color);
  font-family: var(--primary-font);
}

.proj-text p {
  color: var(--white-color);
  line-height: 0;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  width: 15px;
}
</style>
