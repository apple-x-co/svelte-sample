<script>
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'
    import { resetAnswer } from './stores.js'
    import Composite from './Composite.svelte'

    onMount(() => window.scrollTo(0, 0))

    const handleReset = () => {
        resetAnswer()
    }
</script>

<div in:fade>
    <h2>step4</h2>

    <Composite/>

    <button type="button" on:click={handleReset}>Reset</button>
</div>
