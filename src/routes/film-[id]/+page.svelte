<script lang="ts">
	import FilmActors from "$lib/comp/common/FilmPage/FilmActors.svelte";
    import FilmDescrition from "$lib/comp/common/FilmPage/FilmDescrition.svelte";
	import FilmFacts from "$lib/comp/common/FilmPage/FilmFacts.svelte";
    import FilmInfo from "$lib/comp/common/FilmPage/FilmInfo.svelte";
    import Navbar from "$lib/comp/header/navbar.svelte";
    import type { IFilm } from "$lib/database/films.js";
    export let data: { film: IFilm };

</script>
<div class="film-page">
    <Navbar />
    <FilmInfo film={data.film} />
    <FilmDescrition description={data.film.description} />
    <FilmActors film={data.film} />
    <FilmFacts film={data.film}/>
</div>

<style>
    .film-page {
        background: black;
        color: white;
    }
</style>
