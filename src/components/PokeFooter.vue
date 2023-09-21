<template>
  <div class="footer-container">
    <div class="footer">
      <button :class="{ active: footerOptions.showAllActive }" class="showAll-button btn" @click="showAll">
       <img src="/images/Menu.png" alt="Menu icon">
       <span>All</span>
      </button>
      <button :class="{ active: footerOptions.showFavoritesList }" class="fav-button btn" @click="showFavorites">
        <img src="/images/ButtonStar.png" alt="Menu icon">
        <span>Favorites</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/styles/footer.css";
</style>

<script>
export default {
  props: {
    footerOptions: Object
  },
  methods: {
    showAll() {
      this.$emit('show-all');
    },
    showFavorites() {
      this.$emit('show-favorites');
    },
  },
};
</script>