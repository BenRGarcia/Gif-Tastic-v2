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
        <badges 
          @clickBadge="searchGifs"
        />
      </div>
    </section>

    <!-- Gifs | Search Results: <img>'s, still/animated -->
    <section class="row">
      <div class="col-12">
        <results :results="gifResults"/>
      </div>
    </section>

    <!-- Footer | GIPHY Logo -->
    <footer>
      <footerLogo/>
    </footer>

  </div>
</template>

<script>
import apiCall from './assets/javascript/api-call'
import titleHeader from './components/title-header/title-header'
import footerLogo from './components/logo-footer/logo-footer'
import badges from './components/badges/badges'
import results from './components/api-call-results/api-call-results'

export default {
  name: 'App',
  components: {
    titleHeader,
    footerLogo,
    badges,
    results
  },
  data() {
    return {
      gifResults: []
    }
  },
  methods: {
    searchGifs(keyword) {
      apiCall.search(keyword).then(
        function(results) {
          this.gifResults = results.data;
        }.bind(this)
      );
    }
  }
}
</script>

<style>

</style>
