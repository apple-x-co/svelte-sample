<script>
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'
    import { nextStep, interview2, answer } from './stores.js'
    import Title from './Title.svelte'

    onMount(() => window.scrollTo(0, 0))

    const handleSubmit = () => {
        nextStep()
    }
</script>

<Title title="3/4" />

<div in:fade>
    <h2>step3</h2>

    <p>Hi, {$answer.nickname} !!</p>

    <form method="post" on:submit|preventDefault="{handleSubmit}">
        <ul>
            {#each $interview2 as interview}
                {#if interview.case.answerIds.indexOf($answer[interview.case.questionName]) >= 0}
                    <li>
                        <p>
                            {interview.no} {interview.text}
                        </p>
                        <ul>
                            {#each interview.choices as choice}
                                <li>
                                    <label>
                                        <input type="radio" name="{interview.name}" value="{choice.id}" required bind:group={$answer[interview.name]}/>
                                        {choice.text}
                                        {#if choice.src}
                                            <img src="{choice.src}" alt="{choice.text}">
                                        {/if}
                                    </label>
                                </li>
                            {/each}
                        </ul>
                    </li>
                {/if}
            {/each}
        </ul>
        <button>Next</button>
    </form>

    <p>Q1: {$answer.q1}</p>
    <p>Q2: {$answer.q2}</p>
    <p>Q3: {$answer.q3}</p>
    <p>Q4: {$answer.q4}</p>
    <p>Q5: {$answer.q5}</p>
    <p>Q6: {$answer.q6}</p>
</div>
