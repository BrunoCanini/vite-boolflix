<script>

import { store } from './data/store';
import axios from 'axios';

export default {
  name: "App",
  data() {
    return {
        store,
        searchContact: "",
    }
  },
  mounted() {
    console.log("store", store)
    this.movieLoaded(this.store.urlAPI)
  },

  methods: {
    ricerca(){
      let indirizzo = this.store.urlAPI + this.searchContact
      this.movieLoaded(indirizzo)
    },

    movieLoaded(pippo){
      axios.get(pippo).then(risposta => {
      console.log(risposta.data.results);
      this.store.films = risposta.data.results
    }).catch(error => {
      console.error("te pareva");
    })
    }

  }
}

</script>

<template>

  <input type="search" v-model="searchContact" @keyup.enter="ricerca">

  <div v-for="film in store.films">
    <p>{{ film.title }}</p>
    <p> {{ film.original_title }}</p>
    <p>{{ film.vote_average }}</p>
    <p>{{ film.original_language }}</p>
  </div>

</template>

<style lang="scss" scoped>

</style>
