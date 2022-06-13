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
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-elektra></card-elektra>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-punho-de-ferro></card-punho-de-ferro>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-doutor-octopus></card-doutor-octopus>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-nick-fury></card-nick-fury>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-doutor-destino></card-doutor-destino>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-vespa></card-vespa>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-homem-formiga></card-homem-formiga>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-rei-do-crime></card-rei-do-crime>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-caveira-vermelha></card-caveira-vermelha>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-madame-hydra></card-madame-hydra>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-mercurio></card-mercurio>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-wolverine></card-wolverine>
        </v-col>
         <v-col cols="12" md="6" lg="6" xl="6">
          <card-feiticeira-escarlate></card-feiticeira-escarlate>
        </v-col>
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
import CardElektra from '@/components/marvel/CardElektra.vue';
import CardPunhoDeFerro from '@/components/marvel/CardPunhoDeFerro.vue';
import CardDoutorOctopus from '@/components/marvel/CardDoutorOctopus.vue';
import CardNickFury from '@/components/marvel/CardNickFury.vue';
import CardDoutorDestino from '@/components/marvel/CardDoutorDestino.vue';
import CardVespa from '@/components/marvel/CardVespa.vue';
import CardHomemFormiga from '@/components/marvel/CardHomemFormiga.vue';
import CardReiDoCrime from '@/components/marvel/CardReiDoCrime.vue';
import CardCaveiraVermelha from '@/components/marvel/CardCaveiraVermelha.vue';
import CardMadameHydra from '@/components/marvel/CardMadameHydra.vue';
import CardMercurio from '@/components/marvel/CardMercurio.vue';
import CardWolverine from '@/components/marvel/CardWolverine.vue';
import CardFeiticeiraEscarlate from '@/components/marvel/CardFeiticeiraEscarlate.vue';
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
    CardElektra,
    CardDoutorOctopus,
    CardPunhoDeFerro,
    CardNickFury,
    CardDoutorDestino,
    CardVespa,
    CardHomemFormiga,
    CardReiDoCrime,
    CardCaveiraVermelha,
    CardMadameHydra,
    CardMercurio,
    CardWolverine,
    CardFeiticeiraEscarlate
  },
};
</script>

   ,
    CardMercurio 
<style></style>
