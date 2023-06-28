<script>
    import { answer, step } from './stores.js'

    const handleSubmit = () => {
        step.set(4);
    }
</script>

<b>step3</b>
<p>Hi, {$answer.nickname}!!</p>

<form method="post" on:submit|preventDefault="{handleSubmit}">
    <button>Next</button>
</form>
