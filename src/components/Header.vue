<template>
  <v-container>
    <div class="circle d-none d-lg-block" />
    <div class="app-div">
      <div class="app-title text-lg-h1 text-md-h2 text-sm-h3 font-weight-bold">
        Episodes
      </div>
      <div
        class="app-subtitle text-lg-h2 text-md-h3 text-sm-h4 font-weight-bold"
      >
        Last Episodes
      </div>
    </div>
  </v-container>
</template>

<style>
.app-div {
  position: relative;
}
.app-title {
  margin-left: 26%;
  color: #f5f0f0e0;
}
.app-subtitle {
  margin-top: -20px;
  margin-left: 24%;
}
.circle {
  background: #5cd0ff;
  border-radius: 50%;
  width: 350px;
  height: 350px;
  position: absolute;
  overflow: visible;
}
</style>
