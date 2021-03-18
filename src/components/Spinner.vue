<template>
  <div class="spinner">
      <div></div>
      <div></div>
  </div>
</template>

<style>
.spinner {
    width: 15px;
    height: 15px;
    position: relative;
    margin-left: 5px;
    margin-top: 1px;
}
.spinner div {
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-top-color: #fff;
    border-radius: 50%;
    animation: spinnerOne 1.2s linear infinite;
}
.spinner div:nth-child(2) {
    animation-delay: -0.6s;
}

@keyframes spinnerOne {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@media screen and (min-width: 850px) {
    .spinner {
        width: 17px;
        height: 17px;
        margin-left: 8px;
    }
    .spinner div {
        border-width: 3px;
    }
}
</style>