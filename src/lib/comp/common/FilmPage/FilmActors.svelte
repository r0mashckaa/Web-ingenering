<script lang="ts">
	import type { IFilm } from "$lib/database/films";
    import Actorcard from "./Actorcard.svelte";
    import { onMount } from "svelte";
    import { register, type SwiperContainer } from "swiper/element/bundle";
    import type { SwiperOptions } from "swiper/types";
    export let film: IFilm;
    $: actors = film.persons.filter((i) => i.enProfession === 'actor');


    register ();
    let swiperEL: SwiperContainer;

    const swiperParams: SwiperOptions = {
        slidesPerView: 2,
        spaceBetween: 60,
        loop: true,
        autoplay: {
            delay: 3000
        },
        breakpoints: {
            640: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 5
            },
            1440: {
                slidesPerView: 7
            },
        }
    };

    onMount(() => {
        Object.assign(swiperEL, swiperParams);
        swiperEL.initialize();
        console.log(swiperEL)
    });
</script>

<div class="film-actors">
    <div class="container mx-auto">
        <h2 class="mb-7">Актёры</h2>
        <swiper-container init="false" bind:this={swiperEL}>
            {#each actors as actor}
            <swiper-slide><Actorcard person={actor}/></swiper-slide>
            {/each}
        </swiper-container>
    </div>
</div>

<style>
    .film-actors {
        padding-top: 35px;
        padding-bottom: 65px;
    }
</style>