<template>
  <div>
    <div v-dompurify-html="$md.render(model)"></div>

    <br/>
    <br/>

    <div v-dompurify-html="testMarkdownContent"></div>

    <nuxt-link to="/inline">Inline markdown working too!</nuxt-link>
  </div>
</template>

<script>
import testMarkdown from '../blog/test.md'

export default {
  data() {
    return {
      model: '# Hello World!'
    }
  },
  computed: {
    testMarkdownContent() {
      return testMarkdown
    }
  }
}
</script>
