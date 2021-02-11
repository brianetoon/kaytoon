<template>
  <ModalNav title="about"/>
  <div id="about">

    <div class="about-kay">
      <h2>{{ this.about.kay.header }}</h2>
      <p v-for="para in this.about.kay.info" :key="para">{{ para }}</p>
    </div>

    <div class="about-website">
      <h2>{{ this.about.website.header }}</h2>
      <p v-for="para in this.about.website.info" :key="para">{{ para }}</p>
    </div>

    <img class="portrait mobile" alt="portrait"
    :src="require(`@/assets/images/about/${this.about.portraitMobile}`)">
    <img class="portrait full" alt="portrait"
    :src="require(`@/assets/images/about/${this.about.portrait}`)">

    <img class="quote" alt="quote"
      :src="require(`@/assets/images/about/${this.about.quote}`)">

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
#about {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  grid-template-areas: 
    "kay kay kay kay"
    "picture picture picture picture"
    "website website website website"
    "quote quote quote quote"
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
#about h2 {
  margin-bottom: 15px;
}

@media screen and (min-width: 600px) {
  #about {
    grid-gap: 30px;
    grid-template-areas: 
      "kay kay picture picture"
      "website website picture picture"
      "quote quote quote quote"
    ;
  }
  img.portrait.full {
    display: block;
  }
  img.portrait.mobile {
    display: none;
  }
}

@media screen and (min-width: 850px) {
  #about {
    grid-gap: 45px;
  }
  img.portrait {
    padding-top: 10px;
  }
}
</style>
