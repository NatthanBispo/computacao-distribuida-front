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
      v-model="dialog"
      :movie="movie"
      :hasMoviesLists="getHasMoviesLists"
      @favorite="doFavorite"
      @watchLater="doWatchLater"
      @watched="doWatched"
      @hasLists="doHasLists"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

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
    dialog: false,
    movie: {},
  }),
  computed: {
    ...mapGetters([
      'getHasMoviesLists'
    ]),
  },
  methods: {
    ...mapActions([
      'fetchHasLists',
      'handleFavorite',
      'handleWatchLater',
      'handleWatched',
    ]),
    doHasLists(movieId) {
      this.fetchHasLists({ movie_id: movieId });
    },
    openDialog(movie) {
      this.movie = movie;
      this.fetchHasLists({ movie_id: movie.id });
      this.dialog = true;
    },
    doFavorite(movieId) {
      this.handleFavorite(movieId);
    },
    doWatchLater(movieId) {
      this.handleWatchLater(movieId);
    },
    doWatched(movieId) {
      this.handleWatched(movieId);
    }
  }
}
</script>

<style lang="scss">
.movies {
  margin: 100px;
}
</style>