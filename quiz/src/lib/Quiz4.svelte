<script>
    import { answer, step } from './stores.js'

    const handleReset = () => {
        step.set(1);
    }
</script>

<b>step4</b>
<p>Hi, {$answer.nickname}!!</p>
<p>Done !</p>

<button type="button" on:click={handleReset}>Reset</button>
