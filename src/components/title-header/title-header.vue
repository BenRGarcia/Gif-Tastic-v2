<template>
  <div>

    <!-- 'View Source Code' Link -->
    <a 
      :href="url" 
      target="_blank"
    >
      {{ text }}
    </a><br>
  
    <!-- Page Title -->
    <h1 
      :class="titleClasses"
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
      title: "Gif-Tastic!",
      titleClasses: ["display-3", "marvel", "pl-2", "pr-2", "mb-5"]
    }
  }
}
</script>

<style scoped>
a {
  color: white;
  display: inline-block;
}
a:hover {
  text-decoration: none;
  opacity: 0.8;
}
.marvel {
  background-color: red;
  display: inline-block;
  line-height: 1.0;
}
</style>