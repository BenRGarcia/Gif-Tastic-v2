<template>
  <a 
    :href="href" 
    :class="footerClasses"
    target="_blank"
  >
    <img 
      :src="src"
    >
  </a>
</template>

<script>
export default {
  data() {
    return {
      // <a> attributes
      href: "https://giphy.com/",
      footerClasses: ["fixed-bottom"],
      // <img> attributes
      src: require("../../assets/images/giphy-logo.png")
    }
  }
}
</script>

<style scoped>
img {
  background: rgba(255,255,255,0.8);
  border-radius: 4px;
  padding: 2px;
}
a {
  font-size: 1rem;
}
</style>