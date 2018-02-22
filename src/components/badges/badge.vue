<template>
  <span 
    @click="clickBadge" 
    :class="badgeClasses"
  >
    {{ badgeName }}
  </span>
</template>

<script>
export default {
  props: [
    'badgeName'
  ],
  data() {
    return {
      badgeClasses: ["badge"]
    }
  },
  methods: {
    clickBadge(e) {
      this.$emit("clickBadge", this.badgeName);
    }
  }
}
</script>

<style scoped>

</style>