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
      console.log(risposta.data.results);
      this.store.films = risposta.data.results
    }).catch(error => {
      console.error("te pareva");
    })
    },

    serieLoaded(pippo){
      axios.get(pippo).then(risposta => {
      console.log(risposta.data.results);
      this.store.series = risposta.data.results
    }).catch(error => {
      console.error("te pareva");
    })
    },

  }
}

</script>

<template>

  <input type="search" v-model="searchContact" @keyup.enter="ricerca">
  <div class="containerBox">

    <div class="box" v-for="film in store.films">
      <div class="boxImg">
        <img class="poster" :src=" store.urlImg + film.poster_path " alt="">
      </div>
      <p>{{ film.title }}</p>
      <p>{{ film.original_title }}</p>
      <p>{{ film.vote_average }}</p>
      <img :src="`https://flagcdn.com/16x12/${film.original_language}.png`" alt="">
    </div>

  </div>
  <div class="containerBox">

  <div class="box" v-for="serie in store.series">
    <div class="boxImg">
      <img class="poster" :src=" store.urlImg + serie.poster_path " alt="">
    </div>
    <p>{{ serie.name }}</p>
    <p>{{ serie.original_name }}</p>
    <p>{{ serie.vote_average }}</p>
    <img :src="`https://flagcdn.com/16x12/${serie.original_language}.png`" alt="">
  </div>

</div>

</template>

<style lang="scss" scoped>

.box{
  width: 170px;
  height: 450px;
  border: 1px solid black;
  background-color: #cece;
}

.containerBox{
  display: flex;
  flex-wrap: wrap;
}

.boxImg{
  width: 100%;
  height: 200px;
}

.poster{
  width: 100%;
  height: 100%;
}



</style>
