<script>
    import bgUrl from '../assets/bg.jpg'
    import logoUrl from '../assets/logo.png'
</script>

<svelte:head>
    <link rel="preload" as="image" href={bgUrl} />
    <link rel="preload" as="image" href={logoUrl} />
</svelte:head>
