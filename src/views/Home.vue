<template>
  <div>
    <div
      max-width="200"
    >
      <Card />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    Card: () => import('@/components/Card.vue'),
  }
}
</script>

<style>

</style>