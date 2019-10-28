<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container class="v-card mt-10 mb-10">
      <v-col>
        <v-text-field
        v-model="title"
        label="Título"
        :counter="40"
        :rules="titleRules"
        :value="title"
        required></v-text-field>
      </v-col>

      <v-col>
        <v-textarea
          v-model="description"
          name="input-7-1"
          label="Descrição do Lembrete."
          hint="Uma descrição clara e concisa."
          :counter="400"
          :rules="descriptionRules"
          :value="description"
          required
        ></v-textarea>
      </v-col>

      <v-row justify="space-around">
        <v-date-picker
        class="mt-5"
        v-model="calendar"
        color="green lighten-1"
        locale="pt-br"
        :value="calendar"
        required
        ></v-date-picker>

        <v-time-picker
        class="mt-5"
        v-model="time"
        color="green lighten-1"
        :value="time"
        required
        ></v-time-picker>
      </v-row>

      <div class="my-2">
        <v-btn block color="green lighten-1" dark @click="submit">Atualizar Lembrete</v-btn>
      </div>
    </v-container>
  </v-form>
</template>

<script>
import api from '../services/api';
import router from '../router/index';

export default {
  data: () => ({
    valid: true,
    title: "",
    titleRules: [
      v => !!v || "Campo obrigatório.",
      v => (v && v.length <= 40) || "Título não pode ter mais de 40 caracteres."
    ],
    description: "",
    descriptionRules: [
      v => !!v || "Campo obrigatório.",
      v =>
        (v && v.length <= 400) ||
        "Descrição não pode ter mais de 400 caracteres."
    ],
    calendar: new Date().toISOString().substr(0, 10),
    time: null,
    id: '',
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    async submit(){
      const send = {
        id: this.id,
        title: this.title,
        description: this.description,
        calendar: this.calendar,
        time: this.time
      };
      await api.put(`/lembretes/${this.id}`, send)
      return router.push({ name: 'home' })
    },
    async getInfo() {
      const id = this.$route.query.id;
      this.id = id;
      const response = await (api.get(`/lembretes/${id}`));
      const { title, description, calendar, time } = response.data;
      this.title = title;
      this.description = description;
      this.calendar = calendar;
      this.time = time;
    }
  },
  mounted() {
    this.getInfo();
  }
};
</script>

<style lang="sass" >
.container 
  max-width: 600px
  min-width: 300px
  

</style>