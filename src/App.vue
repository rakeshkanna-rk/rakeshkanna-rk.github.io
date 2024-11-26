<template>
  <div>
    <NavBar />
    <HeadLine />
</div>
</template>

<script>

import NavBar from './NavBar.vue';
import HeadLine from './components/HeadLine.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    HeadLine,
  },
  
  data() {
    return {
      
      }
    }
  }

</script>

<style>
body{
  background: var(--bg-color);
  margin: 0;
  cursor: url("./assets/cursor.svg"), auto;
}

#app {
  height: 100vh;
  padding: 30px 80px;
}

@media screen and (max-width: 600px) {
  #app {
    padding: 30px 30px;
  }
  
}
</style>