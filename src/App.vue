<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-sm-offset-2 col-md-12 col-md-offset-3">
        <h1>Routing</h1>
        <hr>
        <router-view name="header-top"/>
        <router-view/>
        <router-view name="header-bottom"></router-view>
      </div>
      <pre>{{ current_location}}</pre>
    </div>
  </div>
</template>
<script>
import Header from './components/common/BaseHeader.vue'

export default {
  data () {
    return {
      current_location: console.log(this.$http)
    }
  },
  components: {
    appHeader: Header
  }
}
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
