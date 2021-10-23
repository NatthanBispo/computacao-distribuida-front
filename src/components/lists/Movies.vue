<template>
  <div
    class="movies"
  >
    Filmes populares
    <v-row>
      <div
        v-for="movie in movies"
        :key="movie.id"
        @click="openDialog(movie)"
      >
        <Card :movie="movie"/>
      </div>
    </v-row>
    <MovieDescriptionDialog
      v-model="dialogDriver"
      :dialog="dialog"
      :movie="movie"
    />
  </div>
</template>

<script>
export default {
  name: 'Movies',
  props: {
    movies: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Card: () => import('@/components/Card.vue'),
    MovieDescriptionDialog: () => import('@/components/dialogs/MovieDescriptionDialog.vue'),
  },
  data: () => ({
    dialogDriver: false,
    movie: {},
  }),
  methods: {
    openDialog(movie) {
      this.movie = movie;
      this.dialogDriver = true;
    }
  }
}
</script>

<style lang="scss">
.movies {
  margin: 100px;
}
</style>