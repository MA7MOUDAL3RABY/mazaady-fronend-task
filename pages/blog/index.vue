<template>
  <div>
    <v-row>
      <v-col cols="12" sm="2" md="4" v-for="i in 6" :key="i">
        <v-card class="mx-auto" max-width="344">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>
          <v-card-title>Top western road trips</v-card-title>
          <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>
          <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text">Explore</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <div class="text-center">
      <v-container>
        <v-row justify="center">
          <v-col cols="8">
            <v-container class="max-width">
              <v-pagination v-model="page" class="my-4" :length="15"></v-pagination>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false
  })
};
</script>