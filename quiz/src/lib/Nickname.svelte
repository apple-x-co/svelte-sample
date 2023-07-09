<script>
    import { onMount, onDestroy } from 'svelte'
    import { fade } from 'svelte/transition'
    import { nextStep, answer, isValidWord } from './stores.js'
    import Title from './Title.svelte'

    onMount(() => window.scrollTo(0, 0))

    let isValid = true
    const unscribe = answer.subscribe((obj) => isValid = isValidWord(obj.nickname))
    onDestroy(unscribe)

    const handleSubmit = () => {
        if (!isValid) {
            return
        }

        nextStep()
    }
</script>

<Title title="1/4" />

<div in:fade>
    <h2>step1</h2>

    <form method="post" on:submit|preventDefault="{handleSubmit}">
        <label>
            ニックネーム
            <input required minlength="1" maxlength="6" autofocus bind:value={$answer.nickname}/>
        </label>
        {#if isValid}
            <button>Next</button>
        {:else}
            <p class="error">別のニックネームを入力してください</p>
        {/if}
    </form>
</div>

<style>
    .error {
        color: red;
        font-weight: bold;
    }
</style>
