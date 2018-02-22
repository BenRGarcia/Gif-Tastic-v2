<template>
  <div>

    <!-- 'View Source Code' Link -->
    <a 
      :href="url" 
      target="_blank"
    >
      {{ text }}
    </a>
  
    <!-- Page Title -->
    <h1 
      :class="[titleClasses]"
    >
      {{ title }}
    </h1>

  </div>
</template>

<script>
export default {
  data() {
    return {
      // 'View Source Code' Link
      url: "https://github.com/BenRGarcia/Gif-Tastic-v2",
      text: "View Source Code",
      // Page Title
      title: "Gif-Tastic! v2",
      titleClasses: ["display-3"]
    }
  }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}
</style>