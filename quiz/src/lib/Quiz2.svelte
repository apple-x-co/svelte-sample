<script>
    import { answer, step } from './stores.js'

    const handleSubmit = () => {
        step.set(3);
    }
</script>

<b>step2</b>
<p>Hi, {$answer.nickname}!!</p>

<form method="post" on:submit|preventDefault="{handleSubmit}">
    <button>Next</button>
</form>
