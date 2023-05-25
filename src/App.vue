<script>

import { store } from './data/store';
import axios from 'axios';

export default {
  name: "App",
  data() {
    return {
        store,
        films: [],
        searchContact: ""
    }
  },
  mounted() {
    console.log("store", store)

    axios.get(this.store.urlAPI).then(risposta => {
      console.log(risposta.data.results);
      this.films = risposta.data.results
    }).catch(error => {
      console.error("te pareva");
    })
  },
  computed : {
        filterContacts(){
            return this.films.filter((contact)=>{
               return contact.title.toLowerCase().startsWith(this.searchContact)
            });
        }
    }
}

</script>

<template>

  <input type="search" v-model="searchContact">

  <div v-for="film in filterContacts">
    <p>{{ film.title }}</p>
    <p> {{ film.original_title }}</p>
    <p>{{ film.vote_average }}</p>
    <p>{{ film.original_language }}</p>
  </div>

</template>

<style lang="scss" scoped>

</style>
