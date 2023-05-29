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
        },

        imgReturn(oggetto){
            if(oggetto.poster_path == null){
                return "../src/assets/placeholder.png"
            } else{
                return this.store.urlImg + oggetto.poster_path
            }
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
                    <img class="poster" :src="imgReturn(film)" alt="">
                </div>
                <div class="show">
                    <p>Titolo: <span>{{ film.title }}</span></p>
                    <p>Titolo Originale: <span>{{ film.original_title }}</span></p>
                    <span>Voto:</span>
                    <template v-for=" i in provap(film.vote_average)">
                        <i class="fa-solid fa-star"></i>
                    </template>
                    <br><p :class="getFlag(film.original_language)"></p> 
                </div>

            </div>

        </div>

        <h1 class="titoloLista">Serie TV</h1>
        <div class="containerBox">

            <div class="box" v-for="serie in store.series">
                <div class="boxImg">
                    <img class="poster" :src="imgReturn(serie)" alt="">
                </div>
                <div class="show">
                    <p>Titolo: <span>{{ serie.name }}</span></p>
                    <p>Titolo Originale: <span>{{ serie.original_name }}</span></p>
                    <span>Voto:</span>
                    <template v-for=" i in provap(serie.vote_average)" :key="i">
                        <i class="fa-solid fa-star"></i>
                    </template>
                    <br><p :class="getFlag(serie.original_language)"></p>
                </div>

            </div>

        </div>
    </main>

</template>

<style lang="scss" scoped>

    .box{
        width: 220px;
        height: 342px;
        border: 2px solid black;
        color: white;
        position: relative;
    }

    .containerBox{
        display: flex;
        height: 343px;
        flex-wrap: wrap;
        padding: 0 1.5rem;
        overflow-x: auto;
    }

    .boxImg{
        width: 100%;
        position: absolute;
        top:0;
        bottom: 0;
    }

    .poster{
        width: 100%;
        height: 100%;
    }

    .titoloLista{
        color: white;
        padding: 1.5rem;
    }

    .show{
        display: none;

        p{
            padding: 0.5rem 0;
        }
    }

    .box:hover {

        border: 2px solid white;

        .boxImg{
            display: none;
        }
        .show{
            display: block;
        }
    }

</style>