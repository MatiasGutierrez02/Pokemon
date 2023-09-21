<template>
  <li class="pokeItem" @click="openPopup">
    <span>{{ capitalize(pokemon.name) }}</span>
    <img
      :src="pokemon.isFavorite ? '/images/Star.svg' : '/images/StarInactive.svg'"
      alt="Star Icon"
      @click.stop="toggleFavorite"
    />
  </li>
</template>

<style scoped>
@import "../assets/styles/pokemonItemList.css";
</style>

<script>
export default {
  props: {
    pokemon: Object 
  },
  methods: {
    openPopup() {
      this.$emit('open-popup', this.pokemon);
    },

    capitalize(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    },

    toggleFavorite() {
      this.$emit('toggle-favorite', this.pokemon);
    }
  }
}
</script>

