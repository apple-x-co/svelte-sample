<script>
    import { fade, fly } from 'svelte/transition'
    import { nextStep, answer } from './stores.js'

    const handleSubmit = () => {
        nextStep()
    }
</script>

<div in:fly="{{ y: 200, duration: 500 }}" out:fade>
    <h2>step1</h2>

    <form method="post" on:submit|preventDefault="{handleSubmit}">
        <label>
            <p>ニックネーム</p>
            <input required minlength="1" maxlength="6" bind:value={$answer.nickname}/>
        </label>
        <button>Next</button>
    </form>
</div>
