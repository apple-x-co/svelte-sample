<script>
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'
    import { nextStep, answer } from './stores.js'

    onMount(() => window.scrollTo(0, 0))

    const ngWords = ['死']
    let isValid = true
    answer.subscribe((obj) => {
        if (obj.nickname === null) {
            return
        }

        isValid = true
        ngWords.forEach((ngWord) => {
            if (obj.nickname.indexOf(ngWord) >= 0) {
                isValid = false
            }
        })
    })

    const handleSubmit = () => {
        if (!isValid) {
            return
        }

        nextStep()
    }
</script>

<style>
    .error {
        color: red;
        font-weight: bold;
    }
</style>

<div in:fade>
    <h2>step1</h2>

    <form method="post" on:submit|preventDefault="{handleSubmit}">
        <label>
            ニックネーム
            <input required minlength="1" maxlength="6" autofocus bind:value={$answer.nickname}/>
        </label>
        {#if isValid === false}
            <p class="error">別のニックネームを入力してください</p>
        {/if}
        <button>Next</button>
    </form>
</div>
