<template>
  <v-hover v-slot="{ hover }" close-delay="100">
    <v-card
      :loading="loading"
      :elevation="hover ? 15 : 2"
      :class="{ 'on-hover': hover }"
      class="card ma-4"
      max-width="250"
      max-height="300"
    >
      <v-card-title
        class="headline font-weight-light text-uppercase text-primary"
        >{{ title }}</v-card-title
      >
      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-col class="text-primary font-weight-bold">{{ name }}</v-col>
        </v-row>
        <v-row align="center" class="mx-0">
          <v-col class="text--secondary">
            {{ jobTitle }}
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="card-actions">
        <v-container>
          <v-row>
            <v-col>
              <v-btn class="mx-4" fab dark small color="black">
                <v-icon>
                  mdi-play
                </v-icon>
              </v-btn>
            </v-col>
            <v-col class="text-right text-no-wrap">
              <v-icon large color="black">far fa-clock</v-icon>
              <v-text class="caption pa-1">{{ duration }}</v-text>
            </v-col>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "Podcast",
  props: {
    title: String,
    name: String,
    jobTitle: String,
    duration: Number,
  },
};
</script>

// control the hover of the card
<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>

<style>
.card {
  background-color: white;
}
.card-outter {
  position: relative;
  padding-bottom: 50px;
}
.card-actions {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
}
</style>
