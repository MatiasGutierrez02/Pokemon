<template>
  <div class="mainContainer">
    <search-bar @search-changed="handleSearchChange" />
    <pokemon-popup v-if="showPopup" :pokemon="selectedPokemon" 
    @close-popup="closePopup" 
    @toggle-favorite-in-popup="toggleFavorite">
    </pokemon-popup>
    <div v-if="!noResults">
      <ul>
        <div class="pokeContainer">
          <poke-item-list
            v-for="pokemon in displayedPokemonList"
            :key="pokemon.name"
            :pokemon="pokemon"
            @toggle-favorite="toggleFavorite"
            @open-popup="openPopup"
          ></poke-item-list>
        </div>
      </ul>
      
    </div>

    <div v-else class="notFoundContainer">
      <div class="notFound">
        <h1>Uh-oh!</h1>
        <p>You look lost on your journey!</p>
        <button @click="goHome">Go back home</button>
      </div>
    </div>
  </div>
  <poke-footer :footer-options="footerOptions" @show-all="showAll" @show-favorites="showFavorites" />
</template>

<style scoped>
@import "../assets/styles/pokemonList.css";
</style>

<script>
import PokeFooter from "../components/PokeFooter.vue"
import PokeItemList from "../components/PokemonItemList.vue"
import PokemonPopup from "../components/PokemonPopup.vue"
import SearchBar from "../components/Search.vue"
import { getPokemons, getPokemonInfo } from '../services/PokemonService.js'

export default {
  components: {
    PokeFooter,
    PokeItemList,
    PokemonPopup,
    SearchBar
  },

  data() {
    return {
      pokemons: [],
      favPokemons: [],
      currentList: [],
      searchQuery: '',
      showPopup: false,
      selectedPokemon: null,
      footerOptions: {
        showAllActive: true,
        showFavoritesList: false
      }
    }
  },

  async mounted() {
  try {
    const savedPokemons = localStorage.getItem('pokemons');

    if (savedPokemons) {
      this.pokemons = JSON.parse(savedPokemons);
      this.currentList = this.pokemons;
    } else {
      this.pokemons = await getPokemons();
      this.currentList = this.pokemons;
      localStorage.setItem('pokemons', JSON.stringify(this.pokemons));
    }
  } catch (error) {
    console.error('Error! ' + error);
  }
},
  computed: {
    displayedPokemonList() {
      if (this.searchQuery !== '') {
        const query = this.searchQuery.toLowerCase();
        return this.currentList.filter(pokemon => {
          const name = pokemon.name.toLowerCase();
          return name.startsWith(query);
        });
      } 
      else {
        return this.footerOptions.showFavoritesList ? this.favPokemons : this.currentList;
      }
    },
    noResults() {
      let result;
      if(this.searchQuery !== '' && this.displayedPokemonList.length === 0) {
        result = true;
      }
      else {
        result= false
      }
      return result;
    }
  },

  methods: {
    showAll() {
      this.footerOptions.showAllActive = true;
      this.footerOptions.showFavoritesList = false;
      this.currentList = this.pokemons; 
    },

    showFavorites() {
      this.footerOptions.showAllActive = false;
      this.footerOptions.showFavoritesList = true;
      this.currentList = this.favPokemons;
    },

    toggleFavorite(pokemon) {
      const index = this.favPokemons.findIndex(fav => fav.name === pokemon.name);
      if (index === -1) {
        const pokemonCopy = { ...pokemon, isFavorite: true };
        this.favPokemons.push(pokemonCopy);
      }else {
        this.favPokemons.splice(index, 1);
      }
      const mainIndex = this.pokemons.findIndex(p => p.name === pokemon.name);
      if (mainIndex !== -1) {
        this.pokemons[mainIndex].isFavorite = !pokemon.isFavorite;
      }
    },

    async openPopup(pokemon) {
      this.selectedPokemon = pokemon;
      this.showPopup = true;
    },

    closePopup() {
      this.showPopup = false;
    },

    handleSearchChange(newQuery) {
      this.searchQuery = newQuery;
    },
    
    goHome() {
      this.searchQuery = '';
      document.getElementsByClassName("input")[0].value = ""
    }
  }
}
</script>