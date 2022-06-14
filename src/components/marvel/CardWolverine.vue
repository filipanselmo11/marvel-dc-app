<template>
  <v-card class="mx-auto" max-width="344">
    <v-img src="../../assets/wolverine.jpeg" max-height="460" max-width="400"></v-img>
    <v-card-title>Wolverine</v-card-title>
    <v-card-actions>
      <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">Explore</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar dark>Wolverine</v-toolbar>
            <v-card-text>
              <div class="mr-2 mt-3">
                <strong>Nome Completo</strong>
              </div>
              <div class="mr-n2">James Howlett/Logan</div>
              <div class="mr-2 mt-3">
                <strong>Codinomes Conhecidos</strong>
              </div>
              <div class="mr-n2">
                Logan, Arma X, Caolho, Morte, Jimmy, Jim Logan, o baixinho invocado
              </div>
              <div class="mr-2 mt-3">
                <strong>Terra Natal</strong>
              </div>
              <div class="mr-n2">Cold Lake, Alberta, Canadá</div>
              <div class="mr-2 mt-3">
                <strong>Espécie</strong>
              </div>
              <div class="mr-n2">Humano Mutante</div>
              <div class="mr-2 mt-3">
                <strong>Afiliações</strong>
              </div>
              <div class="mr-n2">
                <v-timeline :dense="$vuetify.breakpoint.smAndDown">
                  <v-timeline-item color="purple lighten-2" fill-dot right>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="8">Exército Canadense</v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>

                  <v-timeline-item color="deep-purple accent-2" fill-dot left small>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">Arma X</v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="red lighten-5" fill-dot right>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">X-Men</v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="deep-orange" fill-dot left small>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">Novos Vingadores</v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="yellow" fill-dot right>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">Clã Yashida</v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="black" fill-dot right>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">Departamento H</v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="light-blue darken-1" fill-dot left small>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">Tropa Alfa</v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="green lighten-2" fill-dot right>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">Cavaleiros do Apocalipse</v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="pink" fill-dot left small>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">X-Force</v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="cyan" fill-dot right>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">Instituto Jean Grey</v-col>
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
