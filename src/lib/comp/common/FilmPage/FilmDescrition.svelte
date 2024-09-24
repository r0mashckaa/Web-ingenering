<script lang="ts">
    export let description: string;
</script>

<div class="film-des">
    <div class="container mx-auto">
    <h2 class="mb-7">Описание</h2>
    <p>{description}</p>
</div>
</div>

<style lang="scss">
    .film-des {
        border-top: 1px soli var(--light);
        font-size: 18px;
        padding-top: 35px;
        padding-bottom: 70px;
    }
</style>