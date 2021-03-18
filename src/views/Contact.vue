<template>
  <div id="contact">
    <ModalNav title="contact"/>
    <div class="view-content">
      <transition name="switch" mode="out-in">
        <ContactForm @success="messageSent" v-if="!success" />
        <Success v-else />
      </transition>
    </div>
  </div>
</template>

<script>
import ModalNav from '@/components/ModalNav.vue'
import ContactForm from '@/components/ContactForm.vue'
import Success from '@/components/Success.vue'

export default {
  components: { ModalNav, ContactForm, Success },
  data() {
    return {
      success: false
    }
  },
  methods: {
    messageSent() {
      this.success = true
    }
  }
}
</script>

<style>
  .switch-enter-from,
  .switch-leave-to {
    opacity: 0;
    transform: translateY(100px);
  }
  .switch-enter-to,
  .switch-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
  .switch-enter-active,
  .switch-leave-active {
    transition: all 0.4s 0.4s ease;
  }
</style>
