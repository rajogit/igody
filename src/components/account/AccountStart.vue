<template>
  <div>
    <p>Please select a User</p>
    <hr>
    <ul class="list-group">
      <router-link
        tag="li"
        to="/user/1"
        class="list-group-item list-group-item-primary"
        style="cursor: pointer">User 1
      </router-link>
      <router-link
        tag="li"
        to="/user/2"
        class="list-group-item list-group-item-success"
        style="cursor: pointer">User 2
      </router-link>
      <router-link
        tag="li"
        to="/user/3"
        class="list-group-item list-group-item-warning"
        style="cursor: pointer">User 3
      </router-link>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        Cras justo odio
        <b-badge variant="primary" pill>14</b-badge>
      </b-list-group-item>
    </ul>
  </div>
</template>
