<template>
  <div class="home">
    <Navbar @open="openModal" />
    <Portfolio :projects="projects" @open="openModal"/>
    <Modal v-if="showModal" @close="closeModal"/>
  </div>
</template>

<script>
import store from '@/store.js'
import Navbar from '@/components/Navbar.vue'
import Portfolio from '@/components/Portfolio.vue'
import Modal from '@/components/Modal.vue'

export default {
  name: 'Home',
  components: { Portfolio, Modal, Navbar },
  data() {
    return {
      projects: store.projects,
      showModal: false
    }
  },
  methods: {
    closeModal() {
      this.$router.push('/')
      this.showModal = false
    },
    openModal() {
      this.showModal = true
    }
  },
  watch: {
        $route: {
          immediate: true,
          handler: function(newVal, oldVal) {
            this.showModal = newVal.meta && newVal.meta.showModal
      }
    }
  }
}
</script>
