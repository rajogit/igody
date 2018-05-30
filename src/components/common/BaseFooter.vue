<template>
  <animated-fade-in-up>
    <ul class="nav nav-pills mt-2">
      <router-link to="/" tag="li" active-class="active" class="mr-2" exact>
        <a class="btn btn-sm btn-danger">Home</a>
      </router-link>
      <router-link to="/user" tag="li" active-class="active">
        <a class="btn btn-sm btn-warning">User</a>
      </router-link>
    </ul>
  </animated-fade-in-up>
</template>
