<svelte:head>
    <script src="https://cdn.jsdelivr.net/npm/fabric" on:load={drawCanvas}></script>
</svelte:head>

<script>
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'
    import { get } from 'svelte/store'
    import { answer, resetAnswer } from './stores.js'
    import bgUrl from '../assets/bg.jpg'
    import logoUrl from '../assets/logo.png'

    onMount(() => window.scrollTo(0, 0))

    let compositeElem

    const drawCanvas = () => {
        const width = 1200
        const height = 630

        const canvas = new fabric.Canvas('js-canvas', {
            backgroundColor: 'transparent',
        })
        canvas.setWidth(width)
        canvas.setHeight(height)
        canvas.hoverCursor = 'default'

        const rect = new fabric.Rect({
            width: width,
            height: height,
            left: 0,
            top: 0,
            fill: 'transparent',
            rx: 50,
            ry: 50,
            selectable: false,
        })
        canvas.add(rect)

        fabric.util.loadImage(bgUrl, function (image) {
            rect.set('fill', new fabric.Pattern({
                source: image,
                repeat: 'no-repeat',
            }))
            canvas.renderAll()
        })

        fabric.Image.fromURL(logoUrl, function (image) {
            image.set('top', 50)
            image.set('left', 10)
            image.selectable = false
            canvas.add(image)
        })

        const numberText = new fabric.Text('1234567890', {
            originX: 'left',
            originY: 'top',
            fill: 'lightgreen',
            fontSize: 30,
            fontFamily: 'System',
            selectable: false,
            top: 25,
            left: 970,
        })
        canvas.add(numberText)

        const answerObj = get(answer)

        const nicknameText = new fabric.Text(answerObj.nickname, {
            originX: 'left',
            originY: 'top',
            fill: 'black',
            fontSize: 50,
            fontFamily: 'System',
            selectable: false,
            top: 300,
            left: 650,
        })
        canvas.add(nicknameText)

        setTimeout(() => compositeElem.src = canvas.toDataURL(), 100)
    }

    const handleReset = () => {
        resetAnswer()
    }
</script>

<div in:fade>
    <h2>step4</h2>

    <canvas id="js-canvas" class="canvas"></canvas>
    <div class="composite"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=" alt="" bind:this="{compositeElem}"/></div>

    <button type="button" on:click={handleReset}>Reset</button>
</div>
