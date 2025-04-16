<template>
  <div class="link" :style="linkStyle" v-if="ifblock">
    <a :href="link" target="_blank" rel="noopener" class="visit-link">
      {{ text }}
    </a>
  </div>
</template>

<script>
export default {
  name: "RotatingLink",
  props: {
    link: {
      type: String,
      required: true,
    },
    ifblock: {
      type: [Boolean, String, Number, null],
      default: true,
    },
    text: {
      type: String,
      default: "Visit",
    },
    gradient: {
      type: String,
      default: `conic-gradient(
          from 0deg,
          rgba(255, 0, 170, 1),
          rgba(255, 77, 64, 1),
          rgba(204, 79, 92, 1),
          rgba(115, 0, 255, 1),
          rgba(255, 0, 170, 1)
        )`,
    },
  },
  computed: {
    linkStyle() {
      return {
        "--custom-gradient": this.gradient,
      };
    },
  },
};
</script>

<style scoped>
.visit-link {
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: var(--white-color);
  background: #111;
  border-radius: 0.5rem;
}

.link {
  position: relative;
  display: inline-flex;
  padding: 2px;
  border-radius: 0.5rem;
  align-items: center;
  justify-content: start;
  overflow: hidden;
  z-index: 0;
}

.link::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: var(--custom-gradient);
  animation: rotateGradient 4s linear infinite;
  border-radius: inherit;
}

@keyframes rotateGradient {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
