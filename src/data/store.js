import { reactive } from "vue";

export const store = reactive({
    loading: true,
    urlAPI: "https://api.themoviedb.org/3/search/movie?api_key=e49083ee231f61f6e175c870d693bd33&query=",
    films: [],
})