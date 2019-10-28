<template>
  <div class="content">
    <h1 class="mx-5 my-2">Lembretes</h1>
    <v-card
      class="mt-15 mb-5 lembrete-card"
      max-width="100%"
      min-width="98%"
      outlined
      v-for="card in cards"
      :key="card.id"
      @click="toEditLembrete(card.id)"
    >
      <v-card-title>{{ card.title }}</v-card-title>
      <v-card-subtitle>{{ `Para ${card.calendar} as ${card.time}` }}</v-card-subtitle>
      <v-card-text>{{ card.description }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
import api from "../services/api";
import router from '../router/index';

export default {
  data() {
    return {
      cards: null
    };
  },
  methods: {
    reverseObj(obj) {
      const arryReverse = Object.entries(obj).reverse();
      const objReverse = {};
      arryReverse.forEach(element => {
        objReverse[element[0]] = element[1];
      });
      return objReverse;
    },
    toEditLembrete(id) {
      return router.push({ path: `/edit?id=${id}` })
    },
    async getLembretes() {
      let cards = await api.get("/lembretes");
      return (this.cards = this.reverseObj(cards.data));
    }
  },
  mounted() {
    this.getLembretes();
  }
};
</script>

<style lang="sass" scoped>
.content
  display: flex
  flex-direction: column
  align-items: center

.lembrete-card
  cursor: pointer

</style>
