<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container class="v-card mt-10 mb-10">
      <v-col>
        <v-text-field v-model="title" label="Título" :counter="40" :rules="titleRules" required></v-text-field>
      </v-col>

      <v-col>
        <v-textarea
          v-model="description"
          name="input-7-1"
          label="Descrição do Lembrete."
          hint="Uma descrição clara e concisa."
          :counter="400"
          :rules="descriptionRules"
          required
        ></v-textarea>
      </v-col>

      <v-row justify="space-around">
        <v-date-picker class="mt-5" v-model="calendarPicker" color="green lighten-1" locale="pt-br"></v-date-picker>
        <v-time-picker class="mt-5" v-model="time" color="green lighten-1"></v-time-picker>
      </v-row>

      <div class="my-2">
        <v-btn block color="green lighten-1" dark>Criar Lembrete</v-btn>
      </div>
    </v-container>
  </v-form>
</template>

<script>
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
    calendarPicker: new Date().toISOString().substr(0, 10),
    time: null,
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  },
};
</script>

<style lang="sass" >
.container 
  max-width: 600px
  min-width: 300px
  

</style>