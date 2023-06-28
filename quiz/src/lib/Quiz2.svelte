<script>
    import { fade, fly } from 'svelte/transition';
    import { answer, step, interview1 } from './stores.js'

    const handleSubmit = () => {
        step.set(3);
    }
</script>

<div in:fly="{{ y: 200, duration: 500 }}" out:fade>
    <b>step2</b>
    <p>Hi, {$answer.nickname}!!</p>

    <form method="post" on:submit|preventDefault="{handleSubmit}">
        <ul>
            {#each $interview1 as interview}
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
            {/each}
        </ul>
        <button>Next</button>
    </form>
</div>

