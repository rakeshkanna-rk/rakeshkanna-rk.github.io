<template>
  <div id="particles-js"></div>
</template>

<script>
export default {
  name: "Particles",
  mounted() {
    // Ensure particlesJS is available globally
    window.particlesJS("particles-js", {
      particles: {
        number: {
          value: 104,
          density: { enable: true, value_area: 600 },
        },
        color: { value: "#ffffff" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 7 },
        },
        opacity: {
          value: 0.5,
          random: false,
        },
        size: {
          value: 3,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
        },
        modes: {
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: false,
    });
  },
};
</script>

<style scoped>
#particles-js {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
}
</style>
