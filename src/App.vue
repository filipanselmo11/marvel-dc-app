<template>
  <v-app>
    <div>
      <v-toolbar dark prominent src="./assets/Batman-pantera-negra.png">
        <v-toolbar-title>DC Marvel APP</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon to="/">
          <v-icon>mdi-home-circle</v-icon>
        </v-btn>
      </v-toolbar>
    </div>
    <br/>
    <br/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
};
</script>
