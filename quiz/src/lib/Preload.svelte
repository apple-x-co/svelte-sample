<script>
    import bgUrl from '../assets/bg.jpg'
    import logoUrl from '../assets/logo.png'
</script>

<svelte:head>
    <link rel="preload" as="image" href={bgUrl} />
    <link rel="preload" as="image" href={logoUrl} />
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Rampart+One&display=swap" as="style">
</svelte:head>
