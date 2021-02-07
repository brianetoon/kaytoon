<template>
    <nav id="modal-nav">
        <h2 class="page-title">{{ title }}</h2>
        <i class="material-icons close" @click="closeModal">clear</i>
    </nav>
</template>

<script>
export default {
    props: ['title'],
    methods: {
        closeModal() {
            this.$router.push('/')
        }
    }
}
</script>

<style>
#modal-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background: white;
    /* -moz-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4); */
    /* -webkit-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4); */
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    padding: 20px 20px 16px;
}
i.close {
    font-size: 24px;
    color: lightgray;
}
i.close:hover {
    cursor: pointer;
    color: #4a829e;
}
.page-title {
    color: #4a829e;
    text-transform: uppercase;
    font-family: 'mr-eaves-xl-sans', sans-serif;
    font-size: 20px;
}

@media screen and (min-width: 600px) {
    #modal-nav {
        padding: 20px 30px 16px;
    }
    .page-title {
        font-size: 22px;
    }
}

@media screen and (min-width: 850px) {
    #modal-nav {
        padding: 25px 50px 20px;
    }
    .page-title {
        font-size: 24px;
    }
}
</style>