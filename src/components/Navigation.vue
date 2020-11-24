<template>
  <v-container>
    <v-tabs
      v-model="tab"
      color="black"
      slider-color="#007acc"
      background-color="transparent"
      centered
    >
      <!-- the categories presents the tab names (new, dev, etc.) -->
      <v-tab v-for="(item, i) in podcasts" :key="i">
        {{ item.category }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" background-color="transparent">
      <v-tab-item v-for="(item, i) in podcasts" :key="i">
        <div>
          <!-- by using the v-sheet, the list of podcasts can be viewed by horizontally scrolling -->
          <v-sheet class="d-flex d-inline-flex mb-6" height="400px">
            <v-slide-group v-model="model" active-class="success" show-arrows>
              <!-- each v-slide-item represents a card, therefore a podcast -->
              <v-slide-item v-for="(pod, i) in item.podcasts" :key="i">
                <Podcast
                  v-bind:title="pod.title"
                  v-bind:name="pod.name"
                  v-bind:jobTitle="pod.jobTitle"
                  v-bind:duration="pod.duration"
                />
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
          <!-- the "view more" button redirects to the home page itself -->
          <div class="text-center">
            <v-btn outlined elevation="2" href="/">
              view more
            </v-btn>
          </div>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
// import components
import Podcast from "./Podcast";

export default {
  components: {
    Podcast,
  },
  props: {
    tab: null,
    podcasts: Array,
  },
};
</script>
