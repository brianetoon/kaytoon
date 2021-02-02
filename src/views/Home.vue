<template>
  <div class="home">
    <h1>Home</h1>
    <Portfolio :projects="projects" />
  </div>
</template>

<script>
import store from '@/store.js'
import Portfolio from '@/components/Portfolio.vue'

export default {
  name: 'Home',
  components: { Portfolio },
  data() {
    return {
      projects: store.projects
    }
  }
}
</script>

<style>

</style>
