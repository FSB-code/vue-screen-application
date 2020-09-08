<template>
  <v-app>
    <div id="app">
      <div id="nav">
        <router-link to="/home">Home</router-link> |
        <router-link v-if="allScreens.length" :to="`/screens/${allScreens[allScreens.length-1].date}`">Screenpage</router-link>
      </div>
      <router-view/>
    </div>
  </v-app>
</template>

<script>
import {mapGetters,mapActions,mapMutations} from 'vuex'
export default {
  name: 'App',
  computed: mapGetters(["allScreens"]),
  methods: {
    ...mapActions(["fetchScreens",]),
    ...mapMutations(['UPDATE_LOADED',])
  },
  created() {
    const loaded = this.fetchScreens();
    this.UPDATE_LOADED(loaded);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

