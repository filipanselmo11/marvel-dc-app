<template>
  <v-card class="mx-auto" max-width="344">
    <v-img src="../../assets/ras.jpeg" max-height="460" max-width="400"></v-img>
    <v-card-title>Ras Al Ghul</v-card-title>
    <v-card-actions>
       <template>
  <v-card class="mx-auto" max-width="344">
    <v-img src="../../assets/ravena.jpeg" max-height="460" max-width="400"></v-img>
    <v-card-title>Ras Al Ghul</v-card-title>
    <v-card-actions>
        <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">Explore</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar dark>Ras Al Ghul</v-toolbar>
            <v-card-text>
            <div class="mr-2 mt-3">
                <strong>Nome Completo</strong>
              </div>
              <div class="mr-n2">Ras Al Ghul</div>
              <div class="mr-2 mt-3">
                <strong>Codinomes conhecidos</strong>
              </div>
              <div class="mr-n2">Terry Gene Kane, Henri Ducard</div>
              <div class="mr-2 mt-3">
                <strong>Afiliações</strong>
              </div>
              <div class="mr-n2">
                <v-timeline :dense="$vuetify.breakpoint.smAndDown">
                  <v-timeline-item color="purple lighten-2" fill-dot right>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="8">Liga Dos Assassinos</v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>

                  <v-timeline-item color="white" fill-dot left small>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">Liga das Sombras</v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="red" fill-dot right>
                    <v-card>
                      <v-container>
                        <v-row>
                          <v-col cols="12" md="10">Sociedade Secreta dos Super-Vilões</v-col>
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
    </v-card-actions>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>