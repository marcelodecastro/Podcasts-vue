<template>
  <v-app>
    <v-main>
      <div class="background-paper pa-9">
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
}
</style>
