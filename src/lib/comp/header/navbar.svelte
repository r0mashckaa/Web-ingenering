<script>
    import DCbutton from '../common/DCbutton.svelte';  
</script>

<div class="navbar">
    <div class="container mx-auto flex items-center justify-between">
    <a href="/"><img src="/img/logo.svg" alt="logo" style="width: 60px;" /></a>
    <DCbutton>Войти</DCbutton>
</div>
</div>

<style lang="scss">
    .navbar {
        background: rgba(0, 0, 0, 0.5);
        padding: 10px 0;
        @media (max-width: theme('screens.tablet')) {
            padding: 10px;
        }
    }
</style>