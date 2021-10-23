<template>
  <div>
    <v-row>
      <div
        class="options mt-12"
      >
        <div style="width: 400px;">
          <v-text-field
            append-icon="mdi-magnify"
            label="Nome do filme"
            hide-details
            outlined
          />
        </div>
      </div>
    </v-row>
    <v-row>
      <div
        class="options my-12"
      > 
        <v-btn large :color="handleColor('popular')" class="mx-2" @click="showPopular">
          Filmes populares
        </v-btn>
        <v-btn large :color="handleColor('favorite')" class="mx-2" @click="showFavorite">
          Favoritos
        </v-btn>
        <v-btn large :color="handleColor('watchLater')" class="mx-2" @click="showWatchLater">
          Assistir depois
        </v-btn>
        <v-btn large :color="handleColor('warched')" class="mx-2" @click="showWatched">
          Assistidos
        </v-btn>
      </div>
    </v-row>
    <Movies :movies="movies"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Movies: () => import('@/components/lists/Movies.vue'),
  },
  computed: {
    ...mapGetters([
      'getMovies',
      'getFavorites',
      'getWatchLater',
      'getWatcheds',
    ]),
    movies() {
      switch (this.nameListMovie) {
        case 'favorite':
          return this.getFavorites;
        case 'watchLater':
          return this.getWatchLater;
        case 'warched':
          return this.getWatcheds;
        default:
          return this.getMovies.results;
      }
    }
  },
  data: () => ({
    nameListMovie: 'popular',
  }),
  methods: {
    ...mapActions([
      'fetchPopular',
      'indexFavorite',
      'indexWatchLater',
      'indexWatched',
    ]),
    showPopular() {
      this.nameListMovie = 'popular';
    },
    showFavorite() {
      this.nameListMovie = 'favorite';
    },
    showWatchLater() {
      this.nameListMovie = 'watchLater';
    },
    showWatched() {
      this.nameListMovie = 'warched';
    },
    handleColor(name) {
      return this.nameListMovie === name ? 'red' : '#272727';
    }
  },
  mounted(){
    this.fetchPopular();
    this.indexFavorite();
    this.indexWatchLater();
    this.indexWatched();
  }
}
</script>

<style lang="scss" scoped>
.options {
  width: 100%;
  // background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
}
// .movies {
//   display: flex;
//   align-content: center;
//   justify-content: center;
//   align-items: center;
//   justify-items: center;
// }
</style>