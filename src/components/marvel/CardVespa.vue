<template>
  <v-card class="mx-auto" max-width="344">
    <v-img src="../../assets/vespa.jpeg" max-height="460" max-width="400"></v-img>
    <v-card-title>Vespa</v-card-title>
    <v-card-actions>
      <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">Explore</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar dark>Vespa</v-toolbar>
            <v-card-text>
              <div class="mr-2 mt-3">
                <strong>Nome Completo</strong>
              </div>
              <div class="mr-n2">Janet van Dyne</div>
              <div class="mr-2 mt-3">
                <strong>Codinomes Conhecidos</strong>
              </div>
              <div class="mr-n2">Jan, A Encantadora Vespa, Pixie, Janet Pym.</div>
              <div class="mr-2 mt-3">
                <strong>Terra Natal</strong>
              </div>
              <div class="mr-n2">Creskill, Nova Jersey</div>
              <div class="mr-2 mt-3">
                <strong>Espécie</strong>
              </div>
              <div class="mr-n2">Humana</div>
              <div class="mr-2 mt-3">
                <strong>Afiliações</strong>
              </div>
              <div class="mr-n2">
                <v-timeline :dense="$vuetify.breakpoint.smAndDown">
                  <v-timeline-item color="purple lighten-2" fill-dot right>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="8">Vingadores</v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>

                  <v-timeline-item color="deep-purple accent-2" fill-dot left small>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">Senhoras Libertadoras</v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="red lighten-5" fill-dot right>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">Vingadores da Costa Oeste</v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="purple accent-1" fill-dot left small>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">Defensores</v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="blue" fill-dot right>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">Poderosos Vingadores</v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="orange" fill-dot left small>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">Força</v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                </v-timeline>
              </div>
              <div class="mr-2 mt-3">
                <strong>Inimigo(s)</strong>
              </div>
              <div class="mr-n2">Sem informação</div>
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
