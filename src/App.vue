<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Lembrete</span>
        <span class="font-weight-light">App</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="toRoute('home')">
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn text @click="toRoute('new')">
        <span class="mr-2">Novo</span>
      </v-btn>
      <v-btn text @click="toRoute('about')">
        <span class="mr-2">About</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view>
      </router-view>
    </v-content>
  </v-app>
</template>

<script>
import router from './router';

export default {
  name: 'App',
  components: {
    // 
  },
  data: () => ({
    //
  }),
  methods: {
    toRoute(name) {
      router.push({ name })
    }
  }
};
</script>
