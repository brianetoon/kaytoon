<template>
  <router-view/>
</template>

<style>
body, h1, h2 {
  margin: 0;
}
p {
  font-family: 'freight-sans-pro', sans-serif;
  font-size: 16px;
  margin: 0 0 20px 0;
}
p:last-child {
  margin: 0;
}
@media screen and (min-width: 600px) {
  p {
    font-size: 17px;
  }
}

@media screen and (min-width: 850px) {
  p{
    font-size: 19px;
  }
}
</style>
