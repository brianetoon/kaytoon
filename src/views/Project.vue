<template>
    <ModalNav :title="project.title"/>
    <div id="project">
        <div class="intro">
            <p v-for="para in project.intro" :key="para">{{ para }}</p>
        </div>
        <div class="gallery">
            <img v-for="image in project.gallery" :key="image"
            :src="require(`@/assets/images/${project.folder}/${image}`)">
        </div>
    </div>
</template>

<script>
import store from '@/store.js'
import ModalNav from '@/components/ModalNav.vue'

export default {
    props: ['slug'],
    components: { ModalNav },
    computed: {
        project() {
            return store.projects.find(project => {
                return project.slug === this.slug
            })
        }
    }
}
</script>

<style>
.gallery img {
    width: 100%;
    margin-top: 20px;
}

@media screen and (min-width: 600px) {
    .gallery img {
        margin-top: 30px
    }
}

@media screen and (min-width: 850px) {
    .gallery img {
        margin-top: 45px
    }
}
</style>