<template>
  <v-card class="mx-auto" max-width="344">
    <v-img src="../../assets/impulso.jpeg" max-height="460" max-width="400"></v-img>
    <v-card-title>Impulso</v-card-title>
    <v-card-actions>
        <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">Explore</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar dark>Impulso</v-toolbar>
            <v-card-text>
              <div class="mr-2 mt-3">
                <strong>Nome Completo</strong>
              </div>
              <div class="mr-n2">
                Oliver Jonas Queen
              </div>
               <div class="mr-2 mt-3">
                <strong>Codinomes Conhecidos</strong>
              </div>
              <div class="mr-n2">
                Capuz, Robin Hood, Arqueiro Esmeralda, Prefeito Queen
              </div>
              <div class="mr-2 mt-3">
                <strong>Terra Natal</strong>
              </div>
              <div class="mr-n2">
                Star City
              </div>
              <div class="mr-2 mt-3">
                <strong>Espécie</strong>
              </div>
              <div class="mr-n2">
                Humana
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
                          <v-col cols="12" md="8">Liga da Justiça</v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>

                  <v-timeline-item color="deep-purple accent-2" fill-dot left small>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">Indústria Queen</v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="blue" fill-dot left small>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">Sete Soldados da Vitória</v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="yellow" fill-dot right>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">Renegados</v-col>
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
export default {

}
</script>

<style>

</style>