<script>
    export let data
</script>

<div class="menu">Menü: 
    {#if data.user}
    <a href="/t2">Tartalom 2</a>
    <a href="/t2/adat3xx">Tartalom 3</a>
    <a href="/t2/adat4xx">Tartalom 4</a>
    <a href="/t2/adat4xadat5">Tartalom 4 és 5</a>
    <a href="/">Logout</a>
    {:else}
    <a href="/">Login</a>
    {/if}
</div>
<div class="cont">
    <slot />
</div>
<style>
    .menu {
        background-color: yellow;
        padding: 5px;
    }
    :global(body) {
        margin: 0px;
        background-color: rgb(236, 236, 196);
    }
    .cont {
        text-align: center;
        padding: 8px;
        margin: 12px;
        border-radius: 10px;
        box-shadow: 1px 1px 3px inset black;
        display: block;
        height: 100%;
    }
    a {
        all: unset;
        cursor: pointer;
        padding: 4px;
        margin: 4px;
        display: inline-block;
        border: solid 1px black;
        border-radius: 4px;
        background-color: antiquewhite;
    }
</style>