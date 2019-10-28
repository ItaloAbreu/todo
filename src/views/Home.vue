<template>
  <div>
    <h1>Lembretes</h1>
    <v-card
      class="mx-5 my-5"
      max-width="344"
      outlined
      v-for="card in cards"
      :key="card.id"
    >
      <v-card-title>{{ card.title }}</v-card-title>
      <v-card-subtitle>{{ `Para ${card.calendar} as ${card.time}` }}</v-card-subtitle>
      <v-card-text>{{ card.description }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
import api from "../services/api";

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
