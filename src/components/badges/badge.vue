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
      badgeClasses:["badge", "badge-pill", "ml-1", "mr-1"]
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
.badge {
  background-color: red;
  border: 1px solid #fff;
}
.badge:hover {
  opacity: 0.9;
  cursor: pointer;
}
</style>