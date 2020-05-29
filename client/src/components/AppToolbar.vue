<template>
  <v-toolbar color="primary" fixed dark app>
    <v-toolbar-title>
      <v-toolbar-side-icon @click="handleDrawerToggle"></v-toolbar-side-icon>
    </v-toolbar-title>
    <v-text-field
      flat
      solo-inverted
      prepend-inner-icon="search"
      :label="$t('toobar.search')"
      clearable
      class="search"
    ></v-text-field>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat href="mailto:miguel.cabreja90@gmail.com">Contact</v-btn>
      <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
        <v-btn icon large flat slot="activator">
          <v-avatar size="30px">
            <img src="/static/avatar/man_4.jpg" alt="Michael Wang" />
          </v-avatar>
        </v-btn>
        <v-list class="pa-0">
          <v-list-tile
            v-for="(item, index) in items"
            :to="!item.href ? { name: item.name } : null"
            :href="item.href"
            @click="item.click"
            ripple="ripple"
            :disabled="item.disabled"
            :target="item.target"
            rel="noopener"
            :key="index"
          >
            <v-list-tile-action v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
import { mapActions, mapState } from "vuex"
export default {
  name: "AppToolbar",
  computed: {
    ...mapState("login", ["user"]),
    toolbarColor() {
      return this.$vuetify.options.extra.mainNav
    }
  },
  methods: {
    ...mapActions("login", ["logout"]),
    handleDrawerToggle() {
      this.$emit("side-icon-click")
    },
    handleSetting() {},
    handleProfile() {}
  },
  data() {
    return {
      items: [
        {
          icon: "account_circle",
          href: "#",
          title: this.$t("toobar.profile"),
          click: this.handleProfile
        },
        {
          icon: "fullscreen_exit",
          href: "#",
          title: this.$t("toobar.logout"),
          click: this.logout
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped></style>
