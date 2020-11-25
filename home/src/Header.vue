<style>
header {
  background: lightblue;
  padding: 1rem;
  font-size: xx-large;
  font-weight: bold;
  text-align: center;
}
</style>

<script>
export default {
  computed: {
    foobar() {
      return this.props ? this.props.foobar : "";
    }
  }
}
</script>

<template>
<header>
  !!!Spot's A Good Dog!!! - {{ foobar }}
</header>
</template>