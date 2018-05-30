<template>
  <animated-fade-in>
    <div>
      <nav-bar-one></nav-bar-one>
      <ul class="nav nav-pills mt-2">
        <router-link to="/" tag="li" active-class="active" class="mr-2" exact>
          <a class="btn btn-sm btn-primary">Home</a>
        </router-link>
        <router-link to="/user" tag="li" active-class="active">
          <a class="btn btn-sm btn-success">User</a>
        </router-link>
      </ul>
    </div>
  </animated-fade-in>
</template>

<script>
import navBarOne from '../nav/NavBar'

export default {
  components: {
    navBarOne: navBarOne
  }
}
</script>
