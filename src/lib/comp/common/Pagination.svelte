    <script lang="ts">
        export let maxPage: number;
        export let currentPage: number;
    </script>
    
    <ul class="pagination">
        <li>
            <a class="link" href="/?page={currentPage-1}#title">
                <img src="/img/left.svg" alt="left" />
            </a>
        </li>
        {#each Array(maxPage) as _, idx}
        <li class="pagination_item">
            <a href="/?page={idx+1}#title" class={currentPage===idx+1 ? 'link link_active' : 'link'}>{idx+1}</a>
        </li>
        {/each}

        <!-- 
        <li class="pagination_item">
            <a class="link" href="/">2</a>
        </li>
        <li class="pagination_item">
            <a class="link" href="/">3</a>
        </li>
        <li class="pagination_item">
            <a class="link" href="/">4</a>
        </li> -->
        <li class="pagination_item">
            <a class="link" href="/?page={currentPage+1}#title">
                <img src="/img/right.svg" alt="right" />
            </a>
        </li>
    </ul>

<style>
    .pagination {
        display: flex;
        border: 1px solid var(--light);
        width: fit-content;
        border-radius: 30px;
    }
    .link {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .link:hover {
        color: var(--primary);
    }
    .link_active {
        color: rgb(22, 119, 93);
    }
</style>