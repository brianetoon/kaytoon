<template>
  <div id="home">
    <Navbar @open="openModal" />
    <Portfolio :projects="projects" @open="openModal"/>
    <transition name="slide">
      <Modal v-if="showModal" @close="closeModal"/>
    </transition>
    <transition name="fade">
      <ModalBackdrop v-if="showModal" />
    </transition>
  </div>
</template>

<script>
import store from '@/store.js'
import Navbar from '@/components/Navbar.vue'
import Portfolio from '@/components/Portfolio.vue'
import Modal from '@/components/Modal.vue'
import ModalBackdrop from '@/components/ModalBackdrop.vue'

export default {
  name: 'Home',
  components: { Navbar, Portfolio, Modal, ModalBackdrop },
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

        if (this.showModal) {
          if (document.body) {
            document.body.classList.add('modal-open')
          }
        }
        else {
          if (document.body) {
            document.body.classList.remove('modal-open')
          }
        }
      }
    }
  },
  mounted() {
    if (this.showModal) {
      document.body.classList.add('modal-open')
    }
  }
}
</script>

<style>
.modal-open {
  overflow: hidden;
}

/* Modal Transition Styles */
.slide-enter-from {
  opacity: 0;
  transform: translateX(600px);
}
.slide-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.slide-enter-active {
  transition: all 0.3s ease;
}

.slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(600px);
}
.slide-leave-active {
  transition: all 0.3s ease;
}

@media screen and (min-width: 850px) {
  .fade-enter-from {
    opacity: 0;
  }
  .fade-enter-to {
    opacity: 1;
  }
  .fade-enter-active {
    transition: all 0.6s ease;
  }

  .fade-leave-from {
    opacity: 1;
  }
  .fade-leave-to {
    opacity: 0;
  }
  .fade-leave-active {
    transition: all 0.6s ease;
  }
}
</style>
