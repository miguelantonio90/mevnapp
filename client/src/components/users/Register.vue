<template>
  <v-dialog v-model="showRegister" persistent max-width="450px">
    <v-card>
      <v-card-title>
        <span class="headline">New User</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form>
            <v-text-field
              append-icon="person"
              name="fullName"
              :label="$t('user.name')"
              type="text"
              v-model="newUser.name"
            ></v-text-field>
            <v-text-field
              append-icon="email"
              name="Email"
              :label="$t('login.account')"
              type="email"
              v-model="newUser.email"
            ></v-text-field>
            <v-text-field
              append-icon="lock"
              name="password"
              :label="$t('login.password')"
              id="password"
              type="password"
              v-model="newUser.password"
            ></v-text-field>
          </v-form>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" text @click="toogleRegisterModal(false)">Close</v-btn>
        <v-btn color="primary" text @click="createUser">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapState } from "vuex"
export default {
  name: "Register",
  props: {
    dialog: {
      type: Boolean
    }
  },
  computed: {
    ...mapState("user", ["showRegister", "newUser"])
  },
  methods: {
    ...mapActions("user", ["toogleRegisterModal", "createUser"])
  }
}
</script>

<style scoped></style>
