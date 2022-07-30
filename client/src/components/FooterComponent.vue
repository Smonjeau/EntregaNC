<template>
  <v-footer
      color="primary lighten-1"
      padless
      fixed
  >
    <v-row
        justify="center"
        no-gutters

    >
      <p
          v-for="i in info"
          :key="i"


          class="my-2 ml-7 white--text"
      >
        {{ i }}
      </p>

    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data: () => ({
    info: [
      'copyright',
      'All rights reserved'
    ]
  }),
}
</script>

<style scoped>

</style>