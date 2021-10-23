<template>
  <v-card
    class="mx-4 mb-12"
    max-width="280"
    min-height="540"
  >
    <v-img
      height="400"
      :src="movie.poster_path"
    />

    <v-card-title class="title">{{ movie.title }}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0 mb-4"
      >
        <v-rating
          :value="movie.vote_average"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
          length="10"
        ></v-rating>

        <div class="grey--text ms-4">
          {{ movie.vote_average }}
        </div>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Card',
  props: {
    movie: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.title {
  word-break: normal;
}
</style>