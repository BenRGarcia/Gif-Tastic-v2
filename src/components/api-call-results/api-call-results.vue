<template>
  <div>

    <!-- Gif Search Result Instruction -->
    <h2>
      {{ gifText }}
    </h2>

    <!-- Gif Search Results -->
    <result 
      v-for="result in results"
      :key="result.id"
      :rating="result.rating" 
      :stillSrc="result.images.original_still.url" 
      :animatedSrc="result.images.original.url" 
    />
    
  </div>
</template>

<script>
import result from './api-call-result'

export default {
  props: [
    "results"
  ],
  data() {
    return {
      gifText: "3) Click images to toggle animation"
    }
  },
  components: {
    result
  },
}
</script>

<style scoped>
  
</style>