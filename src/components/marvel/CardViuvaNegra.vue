<template>
  <v-card class="mx-auto" max-width="344">
    <v-img src="../../assets/viuva-negra.jpeg" max-height="460" max-width="400"></v-img>
    <v-card-title>Viuva Negra</v-card-title>
    <v-card-actions>
      <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">Explore</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar dark>Viúva Negra</v-toolbar>
            <v-card-text>
              <div class="mr-2 mt-3">
                <strong>Nome Completo</strong>
              </div>
              <div class="mr-n2">Natasha Alianovna Romanova</div>
              <div class="mr-2 mt-3">
                <strong>Codinomes Conhecidos</strong>
              </div>
              <div class="mr-n2">
                Natash Romanoff, Tasha, Nat, Madame Nikita, Natalie "Nancy" Rushman, Laura Matthers, Nadine Roman,
                Tsarina, Vermelho, Oktober, Diabo, Natalia Shostakova, Natsuska, Chama de Ébano, Mrs. Heck, Czarina
              </div>
              <div class="mr-2 mt-3">
                <strong>Terra Natal</strong>
              </div>
              <div class="mr-n2">
                Volgogrado, Rússia
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
                          <v-col cols="12" md="8"> KGB </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>

                  <v-timeline-item color="amber lighten-1" fill-dot left small>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10"> S.H.I.E.L.D. </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>

                  <v-timeline-item color="cyan lighten-1" fill-dot right>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10"> Vingadores </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>

                  <v-timeline-item color="red lighten-1" fill-dot left small>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10"> Os Campeões </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>

                  <v-timeline-item color="green lighten-1" fill-dot right>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10"> Vigilantes </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="teal lighten-5" fill-dot left small>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10"> Libertadoras </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="lime lighten-3" fill-dot right>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10"> Thunderbolts(Infiltrada) </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                </v-timeline>
              </div>
              <div class="mr-2 mt-3">
                <strong>Inimigo(s)</strong>
              </div>
              <div class="mr-n2">Sem informações.</div>
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
