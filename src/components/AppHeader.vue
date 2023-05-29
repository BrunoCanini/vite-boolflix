<script>

import { store } from '../data/store';
import axios from 'axios';
import { flags } from '../data/flags';
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default {
  name: "AppHeader",
  data(){
      return {
        searchContact:"",
        store,
        flags,
      }
  },

  mounted() {
    this.movieLoaded(this.store.urlAPI + "a"),
    this.serieLoaded(this.store.urlAPISeries + "a")
  },

  methods: {
    ricerca(){
      let indirizzo = this.store.urlAPI + this.searchContact
      let indirizzo2 = this.store.urlAPISeries + this.searchContact
      this.movieLoaded(indirizzo),
      this.serieLoaded(indirizzo2)
    },

    movieLoaded(pippo){
      axios.get(pippo).then(risposta => {
      this.store.films = risposta.data.results
    }).catch(error => {
      console.error("te pareva");
    })
    },

    serieLoaded(pippo){
      axios.get(pippo).then(risposta => {
      this.store.series = risposta.data.results
    }).catch(error => {
      console.error("te pareva");
    })
    },
  }

  
}



</script>,

<template>
  <header>
    <div class="boxImg">
      <img src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="">
    </div>
    <div class="boxSearch">
      <input class="search" type="search" placeholder="Cerca spettacolo" v-model="searchContact" @keyup.enter="ricerca">
    </div>
  </header>


</template>,

<style lang="scss" scoped>

header{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.boxImg{
  width: 200px;
  background-color: black;

  img{
    width: 100%;
  }
}

.boxSearch{
  width: 300px;
}

.search{
  width: 100%;
  padding: 0.5rem;
}


</style>


