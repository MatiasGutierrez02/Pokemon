<template>
    <div class="popupContainer" v-if="pokemonInfo != null">
      <div class="popupContent">
        <img class="closeButton" src="/images/Close.png" alt="Close button" @click="closePopup">
        <img class="backgroundImage" src="/images/Background.jpg" alt="Background" />
        <div class="pokemonData">
          <img class="pokemonImage" :src="pokemonInfo.sprites.front_default" alt="Pokemon Image">
          <p><span>Name: </span>{{ capitalize(pokemonInfo.name) }}</p>
          <p><span>Weight: </span> {{ pokemonInfo.weight }}</p>
          <p><span>Height: </span> {{ pokemonInfo.height }}</p>
          <p><span>Type: </span> {{ capitalize(pokemonInfo.types[0].type.name) }}</p>
        </div>
  
        <div class="buttonsContainer">
          <button class="shareButton" v-clipboard:copy="pokemonDataString" @click="shareToFriends">Share to my friends</button>
          <img
            :src="pokemon.isFavorite ? '/images/Star.svg' : '/images/StarInactive.svg'"
            alt="Star Icon"
            @click="toggleFavorite"
          />
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  @import "../assets/styles/pokemonPopup.css";
  </style>
  
  <script>
  import { getPokemonInfo } from '../services/PokemonService.js';
  import VueClipboard from 'vue-clipboard2';
  
  export default {
    props: {
      pokemon: Object,
    },
    data() {
      return {
        pokemonInfo: null,
        pokemonDataString: '',
      };
    },
    async mounted() {
      this.pokemonInfo = await getPokemonInfo(this.pokemon.name);
      this.calculatePokemonDataString();
    },
    methods: {
      shareToFriends() {
        this.$copyText(this.pokemonDataString);
      },
  
      capitalize(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
      },
  
      toggleFavorite() {
        this.$emit('toggle-favorite-in-popup', this.pokemon);
      },
  
      closePopup() {
        this.$emit('close-popup');
      },
  
      calculatePokemonDataString() {
        this.pokemonDataString = `Name: ${this.capitalize(this.pokemonInfo.name)}, Weight: ${this.pokemonInfo.weight}, Height: ${this.pokemonInfo.height}, Type: ${this.capitalize(this.pokemonInfo.types[0].type.name)}`;
      },
    },
    directives: {
      clipboard: VueClipboard.directive,
    },
  };
  </script>
  