<script lang="ts">
    import type { IFilm } from "$lib/database/films";

    export let film: IFilm;

    $: genres = film.genres.map((i) => i.name);
    $: countries = film.countries.map((i) => i.name);
    $: directors = film.persons.filter((i) => i.enProfession === 'director').map((i) => i.name);
</script>


    <div class="container mx-auto">
        <div class="film-info">
    <div class="film-info_det">
        <h1>{film.name}</h1>
        <div>
            <div>
                <b>Год: </b>{film.year}
            </div>
            <div>
                <b>Жанр: </b>{genres.join(' | ')}
            </div>
            <div>
                <b>Страна: </b>{countries.join(', ')}
            </div>
            <div>
                <b>{directors.length > 1 ? 'Режиссёры: ' : 'Режиссёр: '}</b>{directors.join(', ')}
            </div>
        </div>
        <div class="film-info_description">
            {film.shortDescription}
        </div>
        <div class="film-info_rate">
            <div class="flex items-center gap-2"><img src="/img/kp.svg" alt="kp">{film.rating.kp.toFixed(1)}</div>
            <div class="flex items-center gap-2"><img src="/img/imdb.svg" alt="imdb">{film.rating.imdb.toFixed(1)}</div>
        </div>
    </div>
    <div class="film-info_img">
        <img src="{film.backdrop.url}" alt={film.name} />
    </div>
        </div>
    </div>


<style lang="scss">
    .film-info {
        display: grid;
        grid-template-columns: 40% 60%;
        padding: 65px 0;
        border-bottom: 1px solid var(--light);
        @media (max-width: theme('screens.desktop')) {
            display: flex;
            flex-direction: column-reverse;
            gap: 50px;
            padding: 30px 0;
        }
    }
    .film-info_rate {
        display: flex;
        align-items: center;
        gap: 30px;
    }
    .film-info_det {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 18px;
        padding-right: 50px;
        @media (max-width: theme('screens.desktop')) {
            gap: 30px;
        }
    }
    .film-info_img {
        border-radius: 20px;
        overflow: hidden;
        img {
            width:100%;
        }
    }
</style>