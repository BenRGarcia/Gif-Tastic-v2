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
    <div class="card-body">
      <p 
        :class="ratingClasses"
      >
        Rating: {{ rating.toUpperCase() }}
      </p>
    </div>

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
      cardClasses: ["card", "m-2"],
      // Image
      isAnimated: false,
      imageClasses: ["card-img-top"],
      // Rating (G, PG, PG-13, etc.)
      ratingClasses: ["card-text"]
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
.card {
  max-width: 20rem;
  display: inline-block;
}
.card-body {
  padding-top: 0;
  padding-bottom: 0;
}
.card-text {
  color: #000;
}
img {
  max-height: 20rem;
}
</style>