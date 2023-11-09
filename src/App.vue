<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css);

body		{ font-family: 'NanumSquare', sans-serif }
.normal		{ font-weight: 400 }
.bold		{ font-weight: 700 }
.bolder		{ font-weight: 800 }
.light		{ font-weight: 300 }

</style>
