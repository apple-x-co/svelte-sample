<script>
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'
    import { answer, resetAnswer } from './stores.js'
    import Composite from './Composite.svelte'
    import Title from './Title.svelte'

    onMount(() => window.scrollTo(0, 0))

    const handleReset = () => {
        resetAnswer()
    }
</script>

<Title title="4/4" />

<div in:fade>
    <h2>step4</h2>

    <Composite answer="{$answer}"/>

    <button type="button" on:click={handleReset}>Reset</button>
</div>
