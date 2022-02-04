document.addEventListener("DOMContentLoaded", function(event) {
    const canvas = document.getElementById('main__canvas')
    const ctx = canvas.getContext('2d')
    const CANVAS_WIDTH = canvas.width = 389
    const CANVAS_HEIGHT = canvas.height = 662

    const playerImg = new Image()

    playerImg.src = 'img/run.png'

    //Ширина всей полосы разделенное на количество слайдов
    const spriteWidth = 389

    //Высота всей полосы разделенное на количество слайдов в колонку
    const spriteHeight = 662

    let frameX = 0
    let frameY = 0

    let gameFrame = 0
    const staggerFrames = 5

    function animate() {
        ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT)
        // ctx.fillRect(x, y, 20, 20)
        // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw ,dh)
        ctx.drawImage(playerImg, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)
        if(gameFrame % staggerFrames === 0) {
            if(frameX < 21) {
                frameX++
            } else frameX = 0
        }

        gameFrame++

        requestAnimationFrame(animate)
    }

    animate()

});