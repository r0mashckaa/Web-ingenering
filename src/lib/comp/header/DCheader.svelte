<script>
	import Navbar from "./navbar.svelte";

</script>
<header class="header">
    <Navbar />
</header>

<style lang="scss">
    .header {
        background: url('/img/ggg.png') no-repeat center;
        height: 600px;
        box-shadow: inset 0 0 100px 50px rgba(0,0,0,0.5);
        background-size: cover;
        @media (max-width: theme('screens.desktop')) {
            height: 500px;
        }
        @media (max-width: theme('screens.laptop')) {
            height: 400px;
        }
        @media (max-width: theme('screens.tablet')) {
            height: 300px;
        }
    }
</style>