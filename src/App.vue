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
@font-face {
  font-family: 'Oswald';
  src: url('@/assets/Oswald.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

#app {
  font-family: Oswald, Helvetica, Arial, sans-serif;
}

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
