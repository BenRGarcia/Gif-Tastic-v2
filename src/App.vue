<template>
  <div id="app">
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
