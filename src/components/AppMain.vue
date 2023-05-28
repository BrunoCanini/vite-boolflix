<script>

import { store } from '../data/store';
import axios from 'axios';
import { flags } from '../data/flags';
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default{
    name: "AppMain",
    data(){
        return{
            store,
            flags,
        }
    },

    methods:{
        getFlag(lang) {
        return 'fi fi-' + this.flags[lang]
        },

        provap(oggetto){
        return Math.floor(oggetto / 2)
        }

    },
}

</script>

<template>

    <main>

        <h1 class="titoloLista">Film</h1>
        <div class="containerBox">

            <div class="box" v-for="film in store.films">

                <div class="boxImg">
                    <img class="poster" :src=" store.urlImg + film.poster_path " alt="">
                </div>
                <p>Titolo: <span>{{ film.title }}</span></p>
                <p>Titolo Originale: <span>{{ film.original_title }}</span></p>
                <span>Voto:</span>
                <template v-for=" i in provap(film.vote_average)">
                    <i class="fa-solid fa-star"></i>
                </template>
                <br><p :class="getFlag(film.original_language)"></p>

            </div>

        </div>

        <h1 class="titoloLista">Serie TV</h1>
        <div class="containerBox">

            <div class="box" v-for="serie in store.series">
                <div class="boxImg">
                    <img class="poster" :src=" store.urlImg + serie.poster_path " alt="">
                </div>
                <p>Titolo: <span>{{ serie.name }}</span></p>
                <p>Titolo Originale: <span>{{ serie.original_name }}</span></p>
                <span>Voto:</span>
                <template v-for=" i in provap(serie.vote_average)" :key="i">
                    <i class="fa-solid fa-star"></i>
                </template>
                <br><p :class="getFlag(serie.original_language)"></p>
            </div>

        </div>
    </main>

</template>

<style lang="scss" scoped>

    .box{
        width: 200px;
        border: 2px solid black;
        color: white;
    }

    .containerBox{
        display: flex;
        flex-wrap: wrap;
        padding: 0 1.5rem;
    }

    .boxImg{
        width: 100%;
    }

    .poster{
        width: 100%;
        height: 100%;
    }

    .titoloLista{
        color: white;
        padding: 1.5rem;
    }

</style>