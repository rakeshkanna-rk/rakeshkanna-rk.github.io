<script setup>
const footerLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Blog", link: "/blog" },
  { name: "Links", link: "/links" },
];



</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-logo">
        <img src="@/assets/logo.svg" alt="logo" />
        <h3>Rakesh Kanna</h3>
        <p>Crafting experiences where design meets seamless functionality.</p>
      </div>
      <div class="footer-nav-wrapper">
        <div class="footer-nav" v-for="link in footerLinks" :key="link.name">
          <router-link :to="link.link">{{ link.name }}</router-link>
        </div>
      </div>
    </div>
    <p>&copy; 2025 Rakesh Kanna . All rights reserved.</p>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--glass-color-05);
  color: var(--footer-text-color, #fff);
  padding: 20px;
  text-align: center;
  font-family: var(--primary-font);
  border-top: 0.1px solid #ffffff3e;
  gap: 20px;
}

.footer-content {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}

.footer-nav-wrapper{
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer-logo{
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

.footer-nav a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-nav a:hover {
  color: var(--blue-color); 
}
</style>
