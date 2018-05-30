<template>
  <animated-fade-in>
    <div>
      <h1>The User Page</h1>
      <hr>
      <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
      <hr>
      <router-view/>
    </div>
  </animated-fade-in>
</template>

<script>
export default {
  methods: {
    navigateToHome () {
      this.$router.push({name: 'home'})
    }
  }
}
</script>
