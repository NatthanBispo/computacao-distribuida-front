<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    max-width="800"
    :change="closeModal()"
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
                  v-model="selection"
                  active-class="deep-purple accent-4 white--text"
                >
                  <v-chip>Favoritos</v-chip>
                  <v-chip>Assistir depois</v-chip>
                  <v-chip>Assistidos</v-chip>
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
      type: Object,
      default: () => {}
    },
    dialog: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit('change', this.dialog);
    },
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
