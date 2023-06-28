<script>
    import { step, answer } from './stores.js';

    const handleSubmit = () => {
        step.set(2);
    }
</script>

<b>step1</b>

<form method="post" on:submit|preventDefault="{handleSubmit}">
    <label>
        Name: <input required minlength="1" maxlength="6" bind:value={$answer.nickname} />
    </label>
    <button>Next</button>
</form>
