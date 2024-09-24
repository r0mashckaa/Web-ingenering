<script lang="ts">
	import { createEventDispatcher } from "svelte";
    import { debounce } from 'lodash';
    const handler = debounce(()=>{
        dispatch('input', val)
    }, 450)

    const dispatch = createEventDispatcher();
    let val = '';
</script>

<div class="search">
    <img src="/img/search_icon.svg" alt="search" class="search_img"/>
    <input type="text" class="search_input" bind:value={val} on:input={handler} />
</div>

<style>
    .search {
        background: whitesmoke;
        border-radius: 8px;
        display: flex;
        align-items: center;
    }
    .search_img {
        width: 20px;
        margin: 0 5px;
    }
    .search_input {
        padding: 5px;
        background: none;
        border: none;
        color: black;
    }
    .search_input:focus-visible {
        outline: none;
    }
</style>