<template>
  <nav-menu/>
  <router-view/>
</template>

<script>
import NavMenu from "./components/NavMenu";

export default {
  name: "App",
  components: { NavMenu }
}
</script>

<style>
nav {
  padding: 30px;
}

nav router-link {
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #3F83F8;
}
</style>
