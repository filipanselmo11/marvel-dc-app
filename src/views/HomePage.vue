<template>
  <div class="homepage">
    <div>
      <v-card class="mx-auto" max-width="344">
        <v-img src="../assets/dc.jpg" height="200px"></v-img>
        <v-card-title class="font-weight-medium">DC</v-card-title>
        <v-card-actions>
          <v-btn text to="/dc">Entrar</v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <br/>
    <br/>
    

    <div>
      <v-card class="mx-auto" max-width="344">
        <v-img src="../assets/marvel.jpg" height="200px"></v-img>
        <v-card-title class="font-weight-medium">Marvel</v-card-title>
        <v-card-actions>
          <v-btn text to="/marvel">Entrar</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
    name: 'HomePage',
};
</script>

<style></style>
