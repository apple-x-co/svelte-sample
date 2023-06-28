<script>
    import { fade, fly } from 'svelte/transition'
    import { answer, resetAnswer } from './stores.js'

    const handleReset = () => {
        resetAnswer()
    }
</script>

<div in:fly="{{ y: 200, duration: 500 }}" out:fade>
    <h2>step4</h2>

    <p>Hi, {$answer.nickname} !!</p>

    <p>Q1: {$answer.q1}</p>
    <p>Q2: {$answer.q2}</p>
    <p>Q3: {$answer.q3}</p>
    <p>Q4: {$answer.q4}</p>
    <p>Q5: {$answer.q5}</p>
    <p>Q6: {$answer.q6}</p>
    <p>Done !</p>

    <button type="button" on:click={handleReset}>Reset</button>
</div>
