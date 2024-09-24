<script lang="ts">
	import type { IPerson } from "$lib/database/films";

    export let person: IPerson;
</script>

<div class="actor-card">
    <img class="actor-card_img" src={person.photo} alt="Bale">
    <p class="actor-card_name">{person.name}</p>
</div>

<style>
    .actor-card_img {
        width: 100%;
        border-radius: 15px;
        margin-bottom: 10px;
    }
    .actor-card_name {
        text-align: center;
    }
</style>