<script setup>
const linkPage = [
  { name: "GitHub", link: "https://github.com/rakeshkanna-rk" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/rakeshkannas/" },
  { name: "Behance", link: "https://www.behance.net/rakesh_kanna" },
  { name: "Medium", link: "https://medium.com/@rakeshkanna0108" },
  { name: "YouTube", link: "https://www.youtube.com/@rakeshkanna-rk" },
];

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
    <div class="footer-logo-mobile">
      <img src="@/assets/logo.svg" alt="logo" />
      <p>Crafting experiences where design meets seamless functionality.</p>
    </div>
    <div class="footer-content">
      <div class="footer-logo-desktop">
        <img src="@/assets/logo.svg" alt="logo" />
        <p>Crafting experiences where design meets seamless functionality.</p>
      </div>
      <div class="footer-nav-wrapper">
        <h3>Navigation</h3>
        <div class="footer-nav" v-for="item in footerLinks" :key="item.name">
          <router-link :to="item.link">{{ item.name }}</router-link>
        </div>
      </div>
      <div class="footer-nav-wrapper">
        <h3>Links</h3>
        <div class="footer-nav" v-for="link in linkPage" :key="link.name">
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
  color: var(--white-color);
  padding: 20px;
  text-align: center;
  font-family: var(--primary-font);
  border-top: 0.1px solid #ffffff3e;
  gap: 20px;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}

.footer-nav-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer-logo-desktop {
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 300px;

  text-align: left;
  font-size: var(--h4);
  font-weight: 400;
}

.footer-logo-mobile {
  display: none;
  flex-direction: column;
  align-items: start;
  max-width: 300px;

  text-align: left;
  font-size: var(--h4);
  font-weight: 400;
}

@media screen and (max-width: 600px) {
  .footer-logo-desktop {
    display: none;
  }

  .footer-logo-mobile {
    display: flex;
  }
  
}

.footer-nav a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-nav a:hover {
  color: var(--blue-color);
}

@media screen and (max-width: 600px) {
  .footer-logo {
    max-width: 200px;
  }

  .footer {
    padding-bottom: 100px;
  }
}
</style>
