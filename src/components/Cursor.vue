<template>
    <div ref="cursor" class="custom-cursor" v-if="!isMobile">
      <img src="@/assets/cursor.svg" alt="Custom Cursor" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMobile: false,
      };
    },
    mounted() {
      this.checkScreenSize();
      window.addEventListener("resize", this.checkScreenSize);
  
      if (!this.isMobile) {
        const cursor = this.$refs.cursor;
  
        document.addEventListener("mousemove", (e) => {
          cursor.style.left = `${e.clientX}px`;
          cursor.style.top = `${e.clientY}px`;
        });
  
        document.addEventListener("mouseover", (e) => {
          if (e.target.matches(".hover-target")) {
            cursor.classList.add("hovered");
          } else {
            cursor.classList.remove("hovered");
          }
        });
      }
    },
    beforeUnmount() {
      window.removeEventListener("resize", this.checkScreenSize);
    },
    methods: {
      checkScreenSize() {
        this.isMobile = window.innerWidth <= 768;
      },
    },
  };
  </script>
  
  <style scoped>
  .custom-cursor {
    width: 15px;
    height: 15px;
    position: fixed;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease-out;
    z-index: 9999;
  }
  
  .custom-cursor img {
    width: 100%;
    height: 100%;
  }
  
  /* Hover effect */
  .custom-cursor.hovered {
    filter: hue-rotate(90deg);
    transform: scale(1.2);
  }
  </style>
  