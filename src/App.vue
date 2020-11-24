<template>
  <v-app>
    <v-main>
      <div class="background-paper">
        <Header />
        <Navigation v-bind:podcasts="data" />
      </div>
    </v-main>
  </v-app>
</template>

<script>
// import components
import Header from "./components/Header";
import Navigation from "./components/Navigation";

// import data
import podcasts from "./data/podcasts.json";

export default {
  name: "App",

  components: {
    Header,
    Navigation,
  },

  data: () => ({
    data: podcasts,
  }),
};
</script>

<style>
.background-paper {
  background-color: #fefefe;
  min-height: 100%;
  max-width: 70%;
  margin: 0 auto;
  padding-top: 50px;
}
</style>
