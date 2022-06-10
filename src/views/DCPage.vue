<template>
  <div class="dcpage">
    <h1 class="ml-6">DC Comics</h1>
    <br /><br />
    <v-container>
      <v-row>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-batman></card-batman>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-flash></card-flash>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-superman></card-superman>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-mulher-maravilha></card-mulher-maravilha>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-exterminador></card-exterminador>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-flash-reverso></card-flash-reverso>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-lex-luthor></card-lex-luthor>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-kid-flash></card-kid-flash>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-bane></card-bane>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-mulher-leopardo></card-mulher-leopardo>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-sinestro></card-sinestro>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-lanterna-verde></card-lanterna-verde>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-arqueiro-verde></card-arqueiro-verde>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-capuz-vermelho></card-capuz-vermelho>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-robin></card-robin>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-super-boy></card-super-boy>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-katana></card-katana>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-harleyquina></card-harleyquina>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-mulher-gato></card-mulher-gato>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-batman-que-ri></card-batman-que-ri>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-impulso></card-impulso>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-super-choque></card-super-choque>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-raio-negro></card-raio-negro>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-apocalipse></card-apocalipse>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-crocodilo></card-crocodilo>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-zod></card-zod>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-lobo-da-estepe></card-lobo-da-estepe>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-darkseid></card-darkseid>
        </v-col>
        <v-col cols="12" md="6" lg="6" xl="6">
          <card-amanda-waller></card-amanda-waller>
        </v-col>
        <v-col  cols="12" md="6" lg="6" xl="6">
          <card-robin-vermelho></card-robin-vermelho>
        </v-col>
        <v-col  cols="12" md="6" lg="6" xl="6">
          <card-mutano></card-mutano>
        </v-col>
        <v-col  cols="12" md="6" lg="6" xl="6">
          <card-ravena></card-ravena>
        </v-col>
        <v-col  cols="12" md="6" lg="6" xl="6">
          <card-ras></card-ras>
        </v-col>
        <v-col  cols="12" md="6" lg="6" xl="6">
          <card-hugo-strange></card-hugo-strange>
        </v-col>
        <v-col  cols="12" md="6" lg="6" xl="6">
          <card-john-constatine></card-john-constatine>
        </v-col>
        <v-col  cols="12" md="6" lg="6" xl="6">
          <card-shazam></card-shazam>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CardBatman from "@/components/dc/CardBatman.vue";
import CardFlash from "@/components/dc/CardFlash.vue";
import CardSuperman from "@/components/dc/CardSuperman.vue";
import CardMulherMaravilha from "@/components/dc/CardMulherMaravilha.vue";
import CardExterminador from "@/components/dc/CardExterminador.vue";
import CardFlashReverso from "@/components/dc/CardFlashReverso.vue";
import CardLexLuthor from "@/components/dc/CardLexLuthor.vue";
import CardKidFlash from "@/components/dc/CardKidFlash.vue";
import CardBane from "@/components/dc/CardBane.vue";
import CardMulherLeopardo from "@/components/dc/CardMulherLeopardo.vue";
import CardSinestro from "@/components/dc/CardSinestro.vue";
import CardLanternaVerde from "@/components/dc/CardLanternaVerde.vue";
import CardArqueiroVerde from "@/components/dc/CardArqueiroVerde.vue";
import CardCapuzVermelho from "@/components/dc/CardCapuzVermelho.vue";
import CardRobin from "@/components/dc/CardRobin.vue";
import CardSuperBoy from "@/components/dc/CardSuperBoy.vue";
import CardKatana from "@/components/dc/CardKatana.vue";
import CardHarleyquina from "@/components/dc/CardHarleyquina.vue";
import CardMulherGato from "@/components/dc/CardMulherGato.vue";
import CardBatmanQueRi from "@/components/dc/CardBatmanQueRi.vue";
import CardImpulso from "@/components/dc/CardImpulso.vue";
import CardSuperChoque from "@/components/dc/CardSuperChoque.vue";
import CardRaioNegro from "@/components/dc/CardRaioNegro.vue";
import CardApocalipse from "@/components/dc/CardApocalipse.vue";
import CardCrocodilo from "@/components/dc/CardCrocodilo.vue";
import CardZod from "@/components/dc/CardZod.vue";
import CardLoboDaEstepe from "@/components/dc/CardLoboDaEstepe.vue";
import CardDarkseid from "@/components/dc/CardDarkseid.vue";
import CardAmandaWaller from '@/components/dc/CardAmandaWaller.vue';
import CardRobinVermelho from '@/components/dc/CardRobinVermelho.vue';
import CardMutano from '@/components/dc/CardMutano.vue';
import CardRavena from '@/components/dc/CardRavena.vue';
import CardRas from '@/components/dc/CardRas.vue';
import CardHugoStrange from '@/components/dc/CardHugoStrange.vue';
import CardJohnConstatine from '@/components/dc/CardJohnConstatine.vue';
import CardShazam from '@/components/dc/CardShazam.vue';
export default {
  components: {
    CardBatman,
    CardFlash,
    CardSuperman,
    CardMulherMaravilha,
    CardExterminador,
    CardFlashReverso,
    CardLexLuthor,
    CardKidFlash,
    CardBane,
    CardMulherLeopardo,
    CardSinestro,
    CardLanternaVerde,
    CardArqueiroVerde,
    CardCapuzVermelho,
    CardRobin,
    CardSuperBoy,
    CardKatana,
    CardHarleyquina,
    CardMulherGato,
    CardBatmanQueRi,
    CardImpulso,
    CardSuperChoque,
    CardRaioNegro,
    CardApocalipse,
    CardCrocodilo,
    CardZod,
    CardLoboDaEstepe,
    CardDarkseid,
    CardAmandaWaller,
    CardRobinVermelho,
    CardMutano,
    CardRavena,
    CardRas,
    CardHugoStrange,
    CardJohnConstatine,
    CardShazam
  },
  name: "DCPage",
  data: () => ({}),
};
</script>

<style></style>
