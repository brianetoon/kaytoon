<template>
  <div id="about">
    <ModalNav title="about"/>
    <div class="view-content about-content">
      <img class="portrait full" alt="portrait"
      :src="require(`@/assets/images/about/${this.about.portrait}`)">
      <img class="portrait mobile" alt="portrait"
      :src="require(`@/assets/images/about/${this.about.portraitMobile}`)">

      <div class="about-kay">
        <h2>{{ this.about.kay.header }}</h2>
        <p v-for="para in this.about.kay.info" :key="para">{{ para }}</p>
      </div>

      <div class="about-website">
        <h2>{{ this.about.website.header }}</h2>
        <p v-for="para in this.about.website.info" :key="para">
          {{ para }} <a href="https://brianetoon.com/" target="_blank">Brian Toon</a>.
        </p>
      </div>

      <img class="quote" alt="quote"
        :src="require(`@/assets/images/about/${this.about.quote}`)">
    </div>
  </div>
</template>

<script>
import store from '@/store.js'
import ModalNav from '@/components/ModalNav.vue'

export default {
  components: { ModalNav },
  data() {
    return {
      about: store.about
    }
  }
}
</script>

<style>
.about-content {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 25px;
  grid-template-areas: 
    "kay"
    "picture"
    "website"
    "quote"
  ;
}
div.about-kay {
  grid-area: kay;
}
div.about-website {
  grid-area: website;
}
img.portrait {
  grid-area: picture;
}
img.quote {
  grid-area: quote
}

img.portrait {
  width: 100%;
}
img.portrait.full{
  display: none;
}
img.quote {
  width: 100%;
}
.about-content h2 {
  margin-bottom: 15px;
}
.about-content a {
  color: var(--clr-primary);
}

@media screen and (min-width: 600px) {
  .about-content {
    display: inline-block;
  }
  img.portrait {
    display: block;
    width: 45%;
    float: right;
    padding: 0 0 30px 30px;
    box-sizing: border-box;
  }
  .about-kay, .about-website {
    margin-bottom: 30px;
  }
}

@media screen and (min-width: 850px) {
  img.portrait {
    width: 50%;
  }
  img.portrait.mobile {
    display: none;
  }
  img.portrait.full {
    display: block;
  }
  .about-kay, .about-website {
    margin-bottom: 50px;
  }
}
</style>
