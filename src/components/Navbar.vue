<template>
  <nav id="main-nav">
      <img class="logo" src="@/assets/images/logo.svg" alt="logo">
      <ul class="links">
          <li class="link">
              <router-link to="/">Portfolio</router-link>
          </li>
          <li class="link" @click="openModal">
              <router-link to="/about">About</router-link>
          </li>
          <li class="link" @click="openModal">
              <router-link to="/contact">Contact</router-link>
          </li>
      </ul>
  </nav>
</template>

<script>
export default {
    methods: {
        openModal() {
            this.$emit('open')
        }
    }
}
</script>

<style>
#main-nav {
    text-align: center;
    padding: 10px;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
    -moz-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}
#main-nav .logo {
    width: 200px;
    padding: 20px 0 10px;
}
ul.links{
    padding: 10px 0;
    margin: 0;
    display: flex;
    list-style-type: none;
    justify-content: space-around;
}
li.link a{
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    font-family: 'mr-eaves-sans', sans-serif;
    color: #4a829e;
}
li.link a.router-link-exact-active {
    color: black;
}

@media screen and (min-width: 600px) {
    #main-nav .logo {
        width: 240px;
    }
    li.link a {
        font-size: 24px;
    }
}

@media screen and (min-width: 850px) {
    #main-nav {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 20px 40px;
    }
    li.link {
        margin-left: 40px;
    }
}
</style>