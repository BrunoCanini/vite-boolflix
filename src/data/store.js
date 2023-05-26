import { reactive } from "vue";

export const store = reactive({
    loading: true,
    urlAPI: "https://api.themoviedb.org/3/search/movie?api_key=e49083ee231f61f6e175c870d693bd33&query=",
    urlAPISeries:"https://api.themoviedb.org/3/search/tv?api_key=e49083ee231f61f6e175c870d693bd33&query=",
    series: [],
    films: [],
    urlImg: "https://image.tmdb.org/t/p/w342/",
    urlFlag: "https://flagcdn.com/16x12/"
})