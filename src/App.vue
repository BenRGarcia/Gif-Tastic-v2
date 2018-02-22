<template>
  <div id="app" class="container">

    <!-- Header | Source Code Link & Page Title -->
    <header class="row">
      <div class="col-12">
        <titleHeader/>
      </div>
    </header>

    <!-- Badges | New Badge Input & All Badges List -->
    <section class="row">
      <div class="col-12">
        
      </div>
      <div class="col-12">
        
      </div>
    </section>

    <!-- Gifs | Search Results: <img>'s, still/animated -->
    <section class="row">
      <div class="col-12">
        
      </div>
    </section>
    
    <!-- Footer | GIPHY Logo -->
    <footer>
      
    </footer>
  </div>
</template>

<script>
import apiCall from './assets/javascript/api-call'
import titleHeader from './components/title-header/title-header'

export default {
  name: 'App',
  components: {
    titleHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
