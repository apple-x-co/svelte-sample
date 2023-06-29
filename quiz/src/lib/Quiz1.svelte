<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition'
    import { nextStep, answer } from './stores.js'

    onMount(() => window.scrollTo(0,0));

    const handleSubmit = () => {
        nextStep()
    }
</script>

<div in:fade>
    <h2>step1</h2>

    <form method="post" on:submit|preventDefault="{handleSubmit}">
        <label>
            ニックネーム
            <input required minlength="1" maxlength="6" bind:value={$answer.nickname}/>
        </label>
        <button>Next</button>
    </form>
</div>
