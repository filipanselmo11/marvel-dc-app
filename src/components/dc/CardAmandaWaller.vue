<template>
  <v-card class="mx-auto" max-width="344">
    <v-img src="../../assets/amanda_waller.jpeg" max-height="460" max-width="400"></v-img>
    <v-card-title>Amanda Waller</v-card-title>
    <v-card-actions>
        <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">Explore</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar dark>Amanda Waller</v-toolbar>
            <v-card-text>
              <div class="mr-2 mt-3">
                <strong>Nome Completo</strong>
              </div>
              <div class="mr-n2">Amanda Blake Waller</div>
              <div class="mr-2 mt-3">
                <strong>Codinomes Conhecidos</strong>
              </div>
              <div class="mr-n2">Senhorita Waller</div>
              <div class="mr-n2">Terra Natal</div>
              <div class="mr-2 mt-3">
                <strong>Chicago</strong>
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
                          <v-col cols="12" md="8">Lex Luthor</v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="red" fill-dot right left small>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="8">Esquadrão Suicida</v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                   <v-timeline-item color="cyan" fill-dot right>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="8">Esquadrão Xeque-Mate</v-col>
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