import { ref, onMounted } from 'vue'
import { marked } from 'marked'

export function useMarkdown(path) {
  const content = ref('')

  onMounted(async () => {
    try {
      const res = await fetch(path)
      const markdown = await res.text()
      content.value = marked(markdown)
    } catch (err) {
      console.error('Failed to load markdown:', err)
    }
  })

  return { content }
}
