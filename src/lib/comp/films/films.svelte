<script>
	import Pagination from "../common/Pagination.svelte";
import Search from "../common/Search.svelte";
	import FilmCard from "./FilmCard.svelte";
    import { api } from "$lib/database/films";
    import { page } from "$app/stores";
    
    
    let searchQuery = ''
    $: currentPage = Number($page.url.searchParams.get('page')) || 1;
    $: filmsData = api.getFilms(currentPage, searchQuery);
</script>

<div class="films">
    <div class="container mx-auto relative">
        <div class="f_top">
            <a id="title" class="anchor" />
            <h2 class="f_title">Все фильмы</h2>
            <Search on:input={(e)=> (searchQuery = e.detail)} />
        </div>
        <div class="f_grid">
            {#each filmsData.items as film}
            {#key film.id}
            <a href="/film-{film.id}">
                <FilmCard  rate={film.rating} img={film.poster.previewUrl} />
            </a>
            {/key}
            {/each}
        </div>
        <div class="flex justify-center mt-[40px] tablet:justify-end">
            <Pagination {currentPage} maxPage={filmsData.maxPage} />
        </div>
    </div>
</div>

<style lang="scss">
    .films {
        background: black;
        color: white;
        padding: 50px;
        border-top: 1px solid var(--light);
        @media (max-width: theme('screens.tablet')) {
            padding: 10px;
        }
    }
    .f_top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
    }
    .f_grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 25px;
        @media (max-width: theme('screens.desktop')) {
            grid-template-columns:  repeat(3, 1fr);
        }
        @media (max-width: theme('screens.laptop')) {
            grid-template-columns:  repeat(2, 1fr);
        }
        @media (max-width: theme('screens.tablet')) {
            grid-template-columns: 1fr;
        }
    }
    .anchor {
        position: absolute;
        top: -20px;
    }
</style>