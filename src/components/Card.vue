<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="280"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img
      height="400"
      src="https://image.tmdb.org/t/p/w500/vaXiEVLD0fGSMU801Zftw1csPPm.jpg"
    />

    <v-card-title>Gente Grande 2</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0 mb-4"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5
        </div>
      </v-row>

      <v-row
        align="center"
        class="mx-0 mb-4"
      >
        <v-btn
          icon
          @click="show = !show"
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-row>
    </v-card-text>

    <v-expand-transition>
      <div v-show="show">
        <v-card-text>
          <div>Lenny Feder e sua família se mudam para sua cidade natal para ficar perto dos amigos, mas acabam tendo que enfrentar alguns fantasmas do passado, como a covardia diante de valentões e o famigerado bullying na escola.</div>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>

        <v-card-title>Adicionar à uma lista</v-card-title>

        <v-card-text>
          <v-chip-group
            v-model="selection"
            active-class="deep-purple accent-4 white--text"
            column
          >
            <v-chip>Favorito</v-chip>

            <v-chip>Assistir depois</v-chip>

            <v-chip>Assistidos</v-chip>
          </v-chip-group>
        </v-card-text>
      </div>
    </v-expand-transition>

    <!-- <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script>
export default {
  name: 'Card',
  data: () => ({
    show: false,
  }),
}
</script>

<style>

</style>