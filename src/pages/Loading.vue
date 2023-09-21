<template>
      <div class="poke-container">
        <img class="pokeball" src="/images/Pokeball.png" alt="Pokeball logo" />
      </div>
</template>

<style scoped>
  @import "../assets/styles/loading.css";
</style>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push('/pokemonList');
    }, 6000);
  },
};
</script>