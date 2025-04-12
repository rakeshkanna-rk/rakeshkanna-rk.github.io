<template>
  <div
    ref="boxRef"
    class="draggable-box"
    :style="{ transform: `translate(${position.x}px, ${position.y}px)` }"
    @mousedown="startDrag"
    @touchstart.prevent="startDrag"
  >
    <img src="@/assets/spinner.svg" alt="logo" draggable="false" />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const position = ref({ x: 100, y: 500 })
const velocity = ref({ x: 0, y: 0 })
const isDragging = ref(false)
const lastMouse = ref({ x: 0, y: 0 })
const boxRef = ref(null)

let animationFrame = null

const clampAndBounce = () => {
  const box = boxRef.value
  const winW = window.innerWidth
  const winH = window.innerHeight
  if (!box) return

  const boxW = box.offsetWidth
  const boxH = box.offsetHeight

  // Bounce horizontally
  if (position.value.x <= 0 || position.value.x >= winW - boxW) {
    velocity.value.x *= -0.7 // reverse and slow
    position.value.x = Math.min(Math.max(0, position.value.x), winW - boxW)
  }

  // Bounce vertically
  if (position.value.y <= 0 || position.value.y >= winH - boxH) {
    velocity.value.y *= -0.7
    position.value.y = Math.min(Math.max(0, position.value.y), winH - boxH)
  }
}

const updatePosition = () => {
  if (!isDragging.value) {
    position.value.x += velocity.value.x
    position.value.y += velocity.value.y

    // Exponential decay friction
    velocity.value.x *= 0.95
    velocity.value.y *= 0.95

    if (Math.abs(velocity.value.x) < 0.05) velocity.value.x = 0
    if (Math.abs(velocity.value.y) < 0.05) velocity.value.y = 0

    clampAndBounce()
  }

  animationFrame = requestAnimationFrame(updatePosition)
}

const startDrag = (e) => {
  const event = e.type.includes('mouse') ? e : e.touches[0]
  isDragging.value = true
  lastMouse.value = { x: event.clientX, y: event.clientY }

  window.addEventListener('mousemove', onDrag)
  window.addEventListener('mouseup', stopDrag)
  window.addEventListener('touchmove', onDrag, { passive: false })
  window.addEventListener('touchend', stopDrag)
}

const onDrag = (e) => {
  const event = e.type.includes('mouse') ? e : e.touches[0]
  const dx = event.clientX - lastMouse.value.x
  const dy = event.clientY - lastMouse.value.y

  position.value.x += dx
  position.value.y += dy

  velocity.value.x = dx
  velocity.value.y = dy

  lastMouse.value = { x: event.clientX, y: event.clientY }

  e.preventDefault()
}

const stopDrag = () => {
  isDragging.value = false
  window.removeEventListener('mousemove', onDrag)
  window.removeEventListener('mouseup', stopDrag)
  window.removeEventListener('touchmove', onDrag)
  window.removeEventListener('touchend', stopDrag)
}

onMounted(() => {
  updatePosition()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrame)
})
</script>

<style scoped>
.draggable-box {
  position: fixed;
  z-index: 9999;
  will-change: transform;
  cursor: grab;
  user-select: none;
}

.draggable-box:active {
  cursor: grabbing;
}

img {
  width: 130px;
  height: 130px;
  pointer-events: none;
  user-drag: none;
  -webkit-user-drag: none;
  animation: spin 20s linear infinite;
}

@media screen and (max-width: 601px) {
  img {
    width: 100px;
    height: 100px;
  }
  
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>
