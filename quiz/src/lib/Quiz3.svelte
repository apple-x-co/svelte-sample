<script>
    import { fade, fly } from 'svelte/transition';
    import { step, interview2, answer } from './stores.js'

    const handleSubmit = () => {
        step.set(4);
    }
</script>

<div in:fly="{{ y: 200, duration: 500 }}" out:fade>
    <b>step3</b>
    <p>Hi, {$answer.nickname}</p>
    <p>Q1: {$answer.q1}</p>
    <p>Q2: {$answer.q2}</p>
    <p>Q3: {$answer.q3}</p>

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
                                    <input type="radio" value="{choice.id}" required bind:group={$answer[interview.name]} />
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
</div>
