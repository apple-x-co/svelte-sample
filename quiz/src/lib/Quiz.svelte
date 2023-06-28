<script>
    import { step } from './stores.js';
    import Quiz1 from './Quiz1.svelte';
    import Quiz2 from './Quiz2.svelte';
    import Quiz3 from './Quiz3.svelte';
    import Quiz4 from './Quiz4.svelte';
</script>

{#if $step === 1}
    <Quiz1 />
{:else if $step === 2}
    <Quiz2 />
{:else if $step === 3}
    <Quiz3 />
{:else if $step === 4}
    <Quiz4 />
{/if}
