<div>
<div class="recentcard">
    <div class="rec_prog">
        <div class="rec_prog_fill" />
    </div>
</div>
<div class="rec_name">Драйв</div>
</div>

<style>
    .recentcard {
        height: 200px;
        background: url('/img/drive.png') no-repeat top;
        background-size: cover;
        position: relative;
    }
    .rec_prog {
        background: rgb(255, 255, 255, 0/5);
        height: 6px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .rec_prog_fill {
        background: var(--primary);
        height: 6px;
        width: 50%;
    }
    .rec_name {
        padding-left: 20px;
        position: relative;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .rec_name::before {
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--primary);
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
</style>