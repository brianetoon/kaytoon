<template>
    <div id="project">
        <ModalNav :title="project.title"/>
        <div class="view-content">
            <div class="intro">
                <p v-for="para in project.intro" :key="para">{{ para }}</p>
                <p class="url" v-if="project.url">
                    <i class="material-icons">language</i>
                    <a class="external-link" :href="project.url.destination" target="_blank">
                        {{ project.url.text }}
                    </a>
                </p>
            </div>
            <div class="gallery">
                <img v-for="image in project.gallery" :key="image" class="lazyload" alt="img"
                :src="require(`@/assets/images/${project.folder}/${image.lqi}`)"
                :data-src="require(`@/assets/images/${project.folder}/${image.hqi}`)">
            </div>
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
p.url {
    display: flex;
    align-items: center;
}
.url i {
    color: lightgray;
    padding-right: 5px;
}
a.external-link {
    color: var(--clr-primary);
}

@media screen and (min-width: 600px) {
    .gallery img {
        margin-top: 30px;
    }
}

@media screen and (min-width: 850px) {
    .gallery img {
        margin-top: 50px;
    }
}
</style>