<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>

<style>
.modal {
  width: 100%;
  max-width: 850px;
  background: white;
  box-sizing: border-box;
  overflow-y: scroll;
  box-shadow: -1px 0 5px 2px rgba(0, 0, 0, 0.2);
}
.backdrop {
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 2;
}
</style>