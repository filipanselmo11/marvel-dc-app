<template>
  <v-card class="mx-auto" max-width="344">
    <v-img src="../../assets/homem-aranha.png" max-height="460" max-width="400"></v-img>
    <v-card-title>Homem-Aranha</v-card-title>
    <v-card-actions>
      <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">Explore</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar dark> Homem-Aranha (Supaidāman) </v-toolbar>
            <v-card-text>
              <div class="mr-2 mt-3">
                <strong>Nome Completo</strong>
              </div>
              <div class="mr-n2">Peter Benjamin Parker</div>
              <div class="mr-2 mt-3">
                <strong>Codinomes Conhecidos</strong>
              </div>
              <div class="mr-n2">
                Amigo da vizinhança, Amigão de sempre, Cabeça de teia, Teioso, Rastejador
                de paredes
              </div>
              <div class="mr-2 mt-3">
                <strong>Terra Natal</strong>
              </div>
              <div class="mr-n2">Queens, Nova Iorque</div>
              <div class="mr-2 mt-3">
                <strong>Espécie</strong>
              </div>
              <div class="mr-n2">Humano geneticamente modificado</div>
              <div class="mr-2 mt-3">
                <strong>Afiliações</strong>
              </div>
              <div class="mr-n2">
                <v-timeline :dense="$vuetify.breakpoint.smAndDown">
                  <v-timeline-item color="purple lighten-2" fill-dot right>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="8">
                            Clarim Diário
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>

                  <v-timeline-item color="amber lighten-1" fill-dot left small>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">
                            Vingadores
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>

                  <v-timeline-item color="cyan lighten-1" fill-dot right>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">
                           Novos Vingadores
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>

                  <v-timeline-item color="red lighten-1" fill-dot left small>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">
                             Fundação Futuro
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>

                  <v-timeline-item color="green lighten-1" fill-dot right>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">
                            Defensores
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                   <v-timeline-item color="black lighten-1" fill-dot left small>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">
                            Novo Quarteto Fantástico
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                   <v-timeline-item color="blue lighten-1" fill-dot right>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">
                            Heróis de Aluguel
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="pink lighten-1" fill-dot left small>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">
                            Vingadores Secretos
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="red darken-1" fill-dot right>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">
                            Instituto Jean Grey
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="indigo darken-2" fill-dot left small>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">
                            Indústrias Parker
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                </v-timeline>
              </div>
              <div class="mr-2 mt-3">
                <strong>Inimigo(s)</strong>
              </div>
              <div class="mr-n2">
                Duende Verde(arqui-inimigo), Doutor Octopus, Venom, Homem Areia, Electro, Rei do Crime, Shocker,
                Abutre, Lagarto, Rhino, Mystério, Deadpool(às vezes), Justiceiro(às vezes), Camaleão, Carnificina,
                Gata Negra(às vezes), Kraven, Senhor Negativo, Mac Gargan.
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
