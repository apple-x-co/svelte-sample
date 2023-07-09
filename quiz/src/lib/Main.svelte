<script>
    import { step } from './stores.js'
    import Preload from './Preload.svelte'
    import Nickname from './Nickname.svelte'
    import Quiz1 from './Quiz1.svelte'
    import Quiz2 from './Quiz2.svelte'
    import Finish from './Finish.svelte'

    const components = [Nickname, Quiz1, Quiz2, Finish]
</script>

<Preload/>

<svelte:component this="{components[$step - 1]}"/>

<span style="font-family: 'Rampart One'; display: inline-block; width: 0; height: 0; opacity: 0;" aria-hidden="true">Rampart One</span>
