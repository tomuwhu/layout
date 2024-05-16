<script>
    export let data
    export let form
</script>
<h1>Tartalom 1</h1>
{#if (form?.user || data?.user) && (form?.user || '') != 'logged_out'}
<form method="POST" action="?/logout">
    Bejelentkezve: {data.user || form.user}
    <br><br>
    <button>Kijelentkezés</button>
</form>
{:else}
<br><br>
<form method="POST" action="?/login">
    <label for="email">E-mail</label>
    <input type="text" name="email" placeholder="E-mail" id="email">
    <br><br>
    <label for="password">Password</label>
    <input type="text" name="password" placeholder="Jelszó" id="password">
    <br><br>
    <button>Küld</button>
</form>
{/if}