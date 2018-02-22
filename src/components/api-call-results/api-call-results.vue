<template>
  <div>

    <!-- Gif Search Result Instruction -->
    <h4 class="instruction">
      {{ gifText }}
    </h4>

    <!-- Gif Search Results -->
    <transition-group name="list" tag="span">
      <result 
        v-for="result in results"
        :key="result.id"
        :rating="result.rating" 
        :stillSrc="result.images.original_still.url" 
        :animatedSrc="result.images.original.url" 
      />
    </transition-group>
    
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
      gifText: "3) Click to toggle animation"
    }
  },
  components: {
    result
  },
}
</script>

<style scoped>
/* Animation when new gifs rendered */
.list-enter-active {
    transition: all 1s;
    transition-delay: 0.3s;
}
.list-enter {
  opacity: 0;
}
</style>