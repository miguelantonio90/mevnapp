<template>
  <v-card class="elevation-1 pa-3 login-card">
    <register :dialog="showRegister"></register>
    <v-card-text>
      <div class="layout column align-center">
        <img src="/static/m.png" alt="Vue Material Admin" width="120" height="120" />
        <h1 class="flex my-4 primary--text">{{ $t("login.title") }}</h1>
      </div>
      <v-form>
        <v-text-field
          append-icon="email"
          name="login"
          :label="$t('login.account')"
          type="email"
          v-model="request.email"
        ></v-text-field>
        <v-text-field
          append-icon="lock"
          name="password"
          :label="$t('login.password')"
          id="password"
          type="password"
          v-model="request.password"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <div class="login-btn">
      <v-btn icon>
        <v-icon color="blue">fa fa-facebook-square fa-lg</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="red">fa fa-google fa-lg</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="light-blue">fa fa-twitter fa-lg</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn block color="primary" :loading="loading" @click="login">{{ $t("login.submit") }}</v-btn>
        <v-btn  @click.stop="toogleRegisterModal(true)">{{ $t("login.register") }}</v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
import { mapActions, mapState } from "vuex"
import Register from "../../components/users/Register"

export default {
  components: { Register },
  data: () => ({
    dialog: false
  }),
  computed: {
    ...mapState("login", ["user", "loading", "loggedIn", "request"]),
    ...mapState("user", ["showRegister"])
  },
  methods: {
    ...mapActions("login", ["login"]),
    ...mapActions("user", ["toogleRegisterModal"])
  }
}
</script>
<style scoped lang="css"></style>
