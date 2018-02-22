<template>
  <!-- Bootstrap 'Card' -->
  <div :class="cardClasses">

    <!-- Gif still/animated image -->
    <img 
      @click="toggleSrc" 
      :src="isAnimated ? animatedSrc : stillSrc"
      :class="[imageClasses]"
    >

    <!-- Rating (G, PG, PG-13, etc.) -->
    <p 
      :class="ratingClasses"
    >
      Rating: {{ rating.toUpperCase() }}
    </p>

  </div>
</template>

<script>
export default {
  // Each gif image to receive these props
  props: [
    "rating", 
    "animatedSrc", 
    "stillSrc"
  ],
  data() {
    return {
      // Bootstrap Card
      cardClasses: [],
      // Image
      isAnimated: false,
      imageClasses: [],
      // Rating (G, PG, PG-13, etc.)
      ratingClasses: []
    }
  },
  methods: {
    toggleSrc() {
      this.isAnimated = !this.isAnimated;
    }
  }
}
</script>

<style scoped>
  
</style>