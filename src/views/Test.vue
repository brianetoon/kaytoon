<template>
  <div class="lazy-load">
      <img v-for="image in images" :key="image" class="lazyload"
        :src="require(`@/assets/lazyimg/${image.low}`)"
        :data-src="require(`@/assets/lazyimg/${image.high}`)">
  </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
            {
                low: "1-lazy.jpg",
                high: "1.jpg"
            },
            {
                low: "2-lazy.jpg",
                high: "2.jpg"
            },
            {
                low: "3-lazy.jpg",
                high: "3.jpg"
            },
            {
                low: "4-lazy.jpg",
                high: "4.jpg"
            },
            {
                low: "5-lazy.jpg",
                high: "5.jpg"
            },
            {
                low: "6-lazy.jpg",
                high: "6.jpg"
            },
            {
                low: "7-lazy.jpg",
                high: "7.jpg"
            },
            {
                low: "8-lazy.jpg",
                high: "8.jpg"
            },
            {
                low: "9-lazy.jpg",
                high: "9.jpg"
            },
            {
                low: "10-lazy.jpg",
                high: "10.jpg"
            },
                        {
                low: "11-lazy.jpg",
                high: "11.jpg"
            },
                        {
                low: "12-lazy.jpg",
                high: "12.jpg"
            },
        ]
        }
    }
}
</script>

<style>
.lazy-load {
    margin: 20px auto;
    width: 100%;
    max-width: 600px;
}
.lazy-load img {
    display: block;
    width: 100%;
    max-width: 500px;
    padding: 20px;
    box-sizing: border-box;
}
</style>