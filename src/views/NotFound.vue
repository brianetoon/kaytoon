<template>
  <div id="not-found">
    <ModalNav title="page not found"/>
    <div class="view-content">
      <p>Sorry, that page does not exist. Click the close button to return home.</p>
    </div>
  </div>
</template>

<script>
import ModalNav from '@/components/ModalNav.vue'
export default {
  components: { ModalNav },
}
</script>
