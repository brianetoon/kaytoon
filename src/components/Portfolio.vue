<template>
    <ul id="portfolio">
        <li class="project" v-for="project in projects" :key="project.id" @click="openModal">
            <router-link :to="{ name: 'Project', params: { slug: project.slug } }"  >
                    <img :src="require(`@/assets/images/${project.folder}/main.png`)">
                    <div class="overlay">
                        <div class="overlay-text">{{ project.title }}</div>
                    </div>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['projects'],
    methods: {
        openModal() {
            this.$emit('open')
        }
    }
}
</script>

<style>
#portfolio {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 0;
  margin: 0;
}
.project {
  grid-column: span 6;
  position: relative;
  list-style-type: none;
}
.project img {
  display: block;
  width: 100%;
}
.overlay-text {
  color: white;
  font-size: 20px;
  font-family: 'mr-eaves-sans', sans-serif;;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  text-transform: uppercase;
  width: 80%;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-image: url('../assets/images/overlay.png');
  background-size: contain;
}
.project:hover .overlay {
  opacity: 1;
}

@media screen and (min-width: 600px) {
  .overlay-text {
    font-size: 24px;
  }
}

@media screen and (min-width: 900px) {
  .project {
    grid-column: span 4;
  }
  #portfolio .project:nth-child(4) {
    grid-column: 9/13;
    grid-row: 1;
  }
  #portfolio .project:nth-child(5) {
    grid-column: 1/5;
    grid-row: 2;
  }
    #portfolio .project:nth-child(8) {
    grid-column: 5/9;
    grid-row: 2;
  }
  #portfolio .project:nth-child(9) {
    grid-column: 1/5;
    grid-row: 3;
  }
  #portfolio .project:nth-child(7) {
    grid-column: 5/9;
    grid-row: 3;
  }
  #portfolio .project:nth-child(11) {
    grid-column: 1/5;
    grid-row: 4;
  }
  #portfolio .project:nth-child(12) {
    grid-column: 5/9;
    grid-row: 4;
  }
}

@media screen and (min-width: 1200px) {
  .project {
    grid-column: span 3;
  }
  #portfolio .project:nth-child(1) {
    grid-column: 1/4;
    grid-row: 1;
  }
  #portfolio .project:nth-child(2) {
    grid-column: 4/7;
    grid-row: 1;
  }
  #portfolio .project:nth-child(4) {
    grid-column: 7/10;
    grid-row: 1;
  }
  #portfolio .project:nth-child(8) {
    grid-column: 10/13;
    grid-row: 1;
  }
  #portfolio .project:nth-child(3) {
    grid-column: 1/4;
    grid-row: 2;
  }
  #portfolio .project:nth-child(5) {
    grid-column: 4/7;
    grid-row: 2;
  }
  #portfolio .project:nth-child(7) {
    grid-column: 10/13;
    grid-row: 2;
  }
  #portfolio .project:nth-child(10) {
    grid-column: 1/4;
    grid-row: 3;
  }
  #portfolio .project:nth-child(9) {
    grid-column: 4/7;
    grid-row: 3;
  }
  #portfolio .project:nth-child(11) {
    grid-column: 7/10;
    grid-row: 3;
  }
  #portfolio .project:nth-child(12) {
    grid-column: 10/13;
    grid-row: 3;
  }
}
</style>