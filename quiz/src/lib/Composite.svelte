<script>
    import bgUrl from '../assets/bg.jpg'
    import logoUrl from '../assets/logo.png'

    export let answer

    const width = 1200
    const height = 630
    let img

    const drawing = () => {
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

        const bgPromise = new Promise((resolve) => {
            fabric.util.loadImage(bgUrl, function (image) {
                rect.set('fill', new fabric.Pattern({
                    source: image,
                    repeat: 'no-repeat',
                }))
                canvas.renderAll()
                resolve()
            })
        })

        const logoPromise = new Promise((resolve) => {
            fabric.Image.fromURL(logoUrl, function (image) {
                image.set('top', 50)
                image.set('left', 10)
                image.selectable = false
                canvas.add(image)
                resolve()
            })
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

        const nicknameText = new fabric.Text(answer.nickname, {
            originX: 'left',
            originY: 'top',
            fill: 'black',
            fontSize: 50,
            fontFamily: 'Rampart One',
            fontWeight: 'normal',
            selectable: false,
            top: 300,
            left: 650,
        })
        canvas.add(nicknameText)

        Promise.all([bgPromise, logoPromise]).then(() => {
            img.src = canvas.toDataURL()
        })
    }
</script>

<svelte:head>
    <script src="https://cdn.jsdelivr.net/npm/fabric" on:load={drawing}></script>
</svelte:head>

<canvas id="js-canvas" class="canvas"></canvas>
<div class="composite">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=" alt="" bind:this="{img}"/>
</div>

<style>
    .canvas {
        display: none;
    }

    .composite, .composite img {
        width: 100%;
    }
</style>
