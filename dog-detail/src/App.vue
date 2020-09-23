<style>
.container {
  width: 800px;
  margin: auto;
  padding: 1rem;
}
.detail {
  display: grid;
  grid-template-columns: 30% 70%;
  grid-column-gap: 1rem;
}
.detail img {
  width: 100%;
}
</style>

<template>
<div class="container">
  <Header />
  
  <div class="detail">
    <img src="https://placedog.net/500/280?id=40" />
    <div>
      <h1>Cindy</h1>
      <p>Cindy is a fabulous dog with a great personality...</p>
    </div>
  </div>

  <hr />

  <h1>More Adoptable Dogs</h1>
  <Carousel />
</div>
</template>

<script>
import Header from 'home/Header';
import Carousel from 'dogDetail/Carousel';

export default {
  components: {
    Header,
    Carousel
  }
}
</script>