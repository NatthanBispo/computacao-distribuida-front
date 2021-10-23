<template>
  <div>
    <div
      max-width="200"
    >
      <Movies :movies="getMovies.results"/>
    </div>
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
      'getMovies'
    ]),
  },
  methods: {
    ...mapActions([
      'fetchPopular'
    ])
  },
  mounted(){
    this.fetchPopular();
  }
}
</script>

<style>

</style>