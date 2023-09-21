import {createRouter, createWebHistory} from 'vue-router';
import Home from '../pages/Home.vue';
import Loading from '../pages/Loading.vue';
import PokemonList from '../pages/PokemonList.vue';

const routes = [
  {path: '/', component: Home},
  {path: '/loading', component: Loading},
  {path: '/pokemonList', component: PokemonList},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
