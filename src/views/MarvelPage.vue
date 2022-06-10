<template>
  <div class="marvelpage">
    <h1 class="ml-6">Marvel</h1>
    <br /><br />
    <v-container>
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <v-row>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-homem-de-ferro></card-homem-de-ferro>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-homem-aranha></card-homem-aranha>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-thor></card-thor>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-venom></card-venom>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-coisa></card-coisa>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-cavaleiro-da-lua></card-cavaleiro-da-lua>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-ronin></card-ronin>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-viuva-negra></card-viuva-negra>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-professor-x></card-professor-x>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-senhor-fantastico></card-senhor-fantastico>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-capitao-america></card-capitao-america>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-demolidor></card-demolidor>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-capita-marvel></card-capita-marvel>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-thanos></card-thanos>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-pantera-negra></card-pantera-negra>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-doutor-estranho></card-doutor-estranho>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-mulher-invisivel></card-mulher-invisivel>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-justiceiro></card-justiceiro>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-deadpool></card-deadpool>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-tocha-humana></card-tocha-humana>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-noturno></card-noturno>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6"> Elektra </v-col>
        <v-col cols="12" md="6" lg="6" xl="6"> Punho de Ferro </v-col>
        <v-col cols="12" md="6" lg="6" xl="6"> Doutor Octopus </v-col>
        <v-col cols="12" md="6" lg="6" xl="6"> Nick Fury </v-col>
        <v-col cols="12" md="6" lg="6" xl="6"> Doutor Destino </v-col>
        <v-col cols="12" md="6" lg="6" xl="6"> Vespa </v-col>
        <v-col cols="12" md="6" lg="6" xl="6"> Homem Formiga </v-col>
        <v-col cols="12" md="6" lg="6" xl="6"> Rei do Crime </v-col>
        <v-col cols="12" md="6" lg="6" xl="6"> Caveira Vermelha </v-col>
        <v-col cols="12" md="6" lg="6" xl="6"> Madame Hydra </v-col>
        <v-col cols="12" md="6" lg="6" xl="6"> Mercúrio </v-col>
        <v-col cols="12" md="6" lg="6" xl="6"> Wolverine </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CardHomemAranha from "@/components/marvel/CardHomemAranha.vue";
import CardHomemDeFerro from "@/components/marvel/CardHomemDeFerro.vue";
import CardThor from "@/components/marvel/CardThor.vue";
import CardVenom from "@/components/marvel/CardVenom.vue";
import CardCoisa from "@/components/marvel/CardCoisa.vue";
import CardCavaleiroDaLua from '@/components/marvel/CardCavaleiroDaLua.vue';
import CardRonin from '@/components/marvel/CardRonin.vue';
import CardViuvaNegra from '@/components/marvel/CardViuvaNegra.vue';
import CardProfessorX from '@/components/marvel/CardProfessorX.vue';
import CardSenhorFantastico from '@/components/marvel/CardSenhorFantastico.vue';
import CardCapitaoAmerica from '@/components/marvel/CardCapitaoAmerica.vue';
import CardDemolidor from '@/components/marvel/CardDemolidor.vue';
import CardCapitaMarvel from '@/components/marvel/CardCapitaMarvel.vue';
import CardThanos from '@/components/marvel/CardThanos.vue';
import CardPanteraNegra from '@/components/marvel/CardPanteraNegra.vue';
import CardDoutorEstranho from '@/components/marvel/CardDoutorEstranho.vue';
import CardMulherInvisivel from '@/components/marvel/CardMulherInvisivel.vue';
import CardJusticeiro from '@/components/marvel/CardJusticeiro.vue';
import CardDeadpool from '@/components/marvel/CardDeadpool.vue';
import CardTochaHumana from '@/components/marvel/CardTochaHumana.vue';
import CardNoturno from '@/components/marvel/CardNoturno.vue';
export default {
  name: "MarvelPage",
  components: {
    CardHomemAranha,
    CardHomemDeFerro,
    CardThor,
    CardVenom,
    CardCoisa,
    CardCavaleiroDaLua,
    CardRonin,
    CardViuvaNegra,
    CardProfessorX,
    CardSenhorFantastico,
    CardCapitaoAmerica,
    CardDemolidor,
    CardThanos,
    CardCapitaMarvel,
    CardPanteraNegra,
    CardDoutorEstranho,
    CardMulherInvisivel,
    CardJusticeiro,
    CardDeadpool,
    CardTochaHumana,
    CardNoturno,
  },
};
</script>

    
<style></style>
