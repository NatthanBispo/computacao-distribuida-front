<template>
  <div>
    <div class="menu">
      <div class="options">
        <span @click="doLogout">Sair</span>
      </div>
    </div>
    <v-row>
      <div
        class="options mt-12"
      >
        <div style="width: 400px;">
          <v-text-field
            v-model="nameMovie"
            append-icon="mdi-magnify"
            label="Nome do filme"
            hide-details
            color="red"
            outlined
            @change="searchMovie"
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
      'getMoviesByName',
    ]),
    movies() {
      switch (this.nameListMovie) {
        case 'favorite':
          return this.getFavorites;
        case 'watchLater':
          return this.getWatchLater;
        case 'warched':
          return this.getWatcheds;
        case 'searchName':
          return this.getMoviesByName.results;
        default:
          return this.getMovies.results;
      }
    }
  },
  data: () => ({
    nameListMovie: 'popular',
    nameMovie: '',
  }),
  methods: {
    ...mapActions([
      'fetchPopular',
      'indexFavorite',
      'indexWatchLater',
      'indexWatched',
      'fetchByName',
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
    },
    doLogout() {
      this.$store.dispatch('destroySession');
      this.$router.push('/login');
    },
    searchMovie() {
      this.fetchByName({ name: this.nameMovie, page: 1 });
      this.nameListMovie = 'searchName';
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu {
  position: absolute;
  padding: 10px 40px;

  .options {
    padding: 8px 18px;
    border-radius: 5px;
    background-color: $color_primary;
    cursor: pointer;
  }
}
</style>