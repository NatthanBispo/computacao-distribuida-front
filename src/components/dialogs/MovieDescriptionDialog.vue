<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    max-width="800"
  >
    <template>
      <v-card class="movie-description-dialog">
        <v-row no-gutters>
          <v-col
            cols="6"
            class="poster"
          >
            <div
              class="background"
              :style="{ 'background-image': 'url(' + movie.poster_path + ')' }"
            />
            <v-img
              max-width="340"
              class="img"
              :src="movie.poster_path"
            />
          </v-col>
          <v-col cols="6">
            <div class="text-h3 pa-12">{{ movie.title }}</div>
            <v-card-text class="text-body-1 px-12 pb-8 description">
              {{ movie.overview }}
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title class="justify-center">Adicionar à uma lista</v-card-title>

            <v-card-actions class="justify-center pb-8">
              <v-chip-group
                  active-class="deep-purple accent-4 white--text"
                >
                  <v-chip
                    v-model="hasMoviesLists.is_favorite"
                    @click="doFavorite"
                    :disabled="disabled"
                  >
                    Favoritos
                  </v-chip>
                  <v-chip
                    v-model="hasMoviesLists.is_watch_later"
                    @click="doWatchLater"
                    :disabled="disabled"
                  >
                    Assistir depois
                  </v-chip>
                  <v-chip
                    v-model="hasMoviesLists.is_watched"
                    @click="doWatched"
                    :disabled="disabled"
                  >
                    Assistidos
                  </v-chip>
                </v-chip-group>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  name: 'MovieDescriptionDialog',
  model: {
    prop: 'dialog',
    event: 'change',
  },
  props: {
    movie: {
      default: {
        poster_path: '',
        title: '',
        overview: '',
      }
    },
    dialog: {
      type: Boolean,
      default: false,
    },
    hasMoviesLists: {
      default: {
        is_favorite: false,
        is_watch_later: false,
        is_watched: false,
      },
    }
  },
  data: () => ({
    disabled: false,
  }),
  methods: {
    doFavorite() {
      this.$emit('favorite', this.movie.id)
      this.loadingBlockAction();
    },
    doWatchLater() {
      this.$emit('watchLater', this.movie.id)
      this.loadingBlockAction();
    },
    doWatched() {
      this.$emit('watched', this.movie.id)
      this.loadingBlockAction();
    },
    loadingBlockAction() {
      this.disabled = true;
      setTimeout(() => {
        this.disabled = false;
        this.$emit('hasLists', this.movie.id);
      }, 800);
    }
  }
}
</script>

<style lang="scss" scoped>
.movie-description-dialog {
  .poster {
    display: flex;
    justify-content: center;
    align-items: center;

    .img {
      border-radius: 2%;
      margin: 40px;
    }
  }

  .description {
    overflow-y: scroll;
    max-height: 300px;
  }

  .background {
    filter: blur(20px) opacity(40%);
    position: absolute;
    width: 50%;
    height: 100%;
  }
}
</style>
