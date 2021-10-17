<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>

    <v-main>
      <Home/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
    Home: () => import('@/views/Home.vue'),
  },

  data: () => ({
    //
  }),
};
</script>
