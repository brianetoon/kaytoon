<template>
  <div id="contact">
    <ModalNav title="contact"/>
    <div class="view-content">
      <p>I’d love to hear from you! Feel free to ask questions about my work, leave a comment, or just say hi.</p>
      <form>
        <input type="text" placeholder="Name">
        <input type="email" placeholder="Email">
        <textarea placeholder="Your message..."></textarea>
        <button class="submit">Send message</button>
      </form>
    </div>
  </div>
</template>

<script>
import ModalNav from '@/components/ModalNav.vue'

export default {
  components: { ModalNav }
}
</script>

<style>
input, textarea {
  display: block;
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid lightgray;
}
button.submit {
  padding: 12px;
  margin-top: 20px;
  border: none;
  background: #4a829e;
  font-family: 'mr-eaves-sans', sans-serif;
  text-transform: uppercase;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
}
textarea {
  height: 200px;
}
input:focus,
textarea:focus,
button:focus {
    outline: transparent;
    border: 2px solid #4a829e;
}

@media screen and (min-width: 600px) {
  input, textarea, button.submit {
    margin-top: 30px;
  }
}
@media screen and (min-width: 850px) {
  button.submit {
   font-size: 18px;
  }
}
</style>
