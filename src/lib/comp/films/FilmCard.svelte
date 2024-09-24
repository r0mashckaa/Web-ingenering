<script lang="ts">
	import type { IRate } from "$lib/database/films";

    export let rate: IRate;
    export let img: string;
    let rateStatus: string = 'high';
    if(rate.kp<7) {
        rateStatus='middle'
    }
    if(rate.kp<5) {
        rateStatus = 'low'
    }
</script>

<div class="Film_card" style:background={`url(${img}) no-repeat top`} style:background-size='cover'>
    <div class="Film_card_header">
        <span class="Film_card_rate Film_card_rate_{rateStatus}">{rate.kp.toFixed(1)}</span>
    </div>
</div>

<style>
    .Film_card {
        height: 500px;
        background-size: cover;
        border-radius: 10px;
        gap: 30px;
    }
    .Film_card_header {
        background: rgba(0, 0, 0, 0.5);
        height: 25px;
        padding: 0 10px;
        display: flex;
        justify-items: center;
    }
    .Film_card_rate {
        border-radius: 5px;
        padding: 0 15px;
    }
    .Film_card_rate_high {
        background: var(--secondary);
    }
    .Film_card_rate_middle {
        background: var(--middle);
    }
    .Film_card_rate_low {
        background: var(--low);
    }
</style>