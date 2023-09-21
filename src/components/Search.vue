<template>
    <div class="input-container">
      <input class="input" v-model="searchQuery" type="text" placeholder="Search">
    </div>
</template>
  
<style scoped>
@import "../assets/styles/search.css";
</style>

<script>
export default {
  data() {
    return {
    searchQuery: ''
    }
  },
  watch: {
    searchQuery(newQuery) {
    this.$emit('search-changed', newQuery);
    }
  }
}
</script>