<script setup>
import { ref, computed } from 'vue'

const copied = ref(false)

const icon = computed(() =>
  copied.value ? '/icons/check.svg' : '/icons/copy.svg'
)
const text = computed(() =>
  copied.value ? 'Copied to clipboard' : 'rakeshkanna0108@gmail.com'
)

const handleCopy = () => {
  const textarea = document.createElement('textarea')
  textarea.value = 'rakeshkanna0108@gmail.com'
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'absolute'
  textarea.style.left = '-9999px'
  document.body.appendChild(textarea)
  textarea.select()
  try {
    document.execCommand('copy')
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 5000)
  } catch (err) {
    console.error('Copy failed:', err)
  }
  document.body.removeChild(textarea)
}
</script>

<template>
  <button @click="handleCopy" class="copy-btn">
    <div class="motion-box" v-motion :initial="{ opacity: 0, scale: 0.95 }" :enter="{ opacity: 1, scale: 1 }" :leave="{ opacity: 0, scale: 0.95 }">
      <img :src="icon" alt="icon" class="icon" />
    </div>
    <div class="motion-box" v-motion :initial="{ opacity: 0, y: 6 }" :enter="{ opacity: 1, y: 0 }" :leave="{ opacity: 0, y: -6 }">
      <span>{{ text }}</span>
    </div>
  </button>
</template>

<style scoped>
.copy-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  background: none;
  border: none;
  font-family: var(--primary-font);
  font-size: 1rem;
  color: var(--white-color);
  padding: 8px 12px;
  border-radius: 8px;
  transition: background 0.3s;
}

.copy-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.icon {
  width: 20px;
  height: 20px;
}

.motion-box {
  display: flex;
  align-items: center;
}
</style>
