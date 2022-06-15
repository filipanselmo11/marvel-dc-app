<template>
  <v-card class="mx-auto" max-width="344">
    <v-img
      src="../../assets/lanterna-verde.jpeg"
      max-height="460"
      max-width="400"
    ></v-img>
    <v-card-title>Lanterna Verde</v-card-title>
    <v-card-actions>
      <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">Explore</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar dark>Lanterna Verde</v-toolbar>
            <v-card-text>
              <div class="mr-2 mt-3">
                <strong
                  >Personagens que já assumiram a indetidade do Lanterna Verde</strong
                >
              </div>
              <div class="mr-n2">
                Ala Scott, Hal Jordan, Kyle Rayner, Guy Gardner, Abin Sur, John Stewart,
                Simon Braz, Jessica Cruz, Jong Li, José Hernandez
              </div>
              <div class="mr-2 mt-3">
                <strong>Afiliações</strong>
              </div>
              <div class="mr-n2">
                <v-timeline :dense="$vuetify.breakpoint.smAndDown">
                  <v-timeline-item color="purple lighten-2" fill-dot right>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="8">Liga da Justiça da América</v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>

                  <v-timeline-item color="deep-purple accent-2" fill-dot left small>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">Liga da Justiça</v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="blue" fill-dot left small>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">Tropa dos Lanternas Verdes</v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                </v-timeline>
              </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="dialog.value = false">Fechar</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {};
</script>

<style></style>
