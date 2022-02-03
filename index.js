document.addEventListener("DOMContentLoaded", function(event) {
    const canvas = document.getElementById('main__canvas')
    const ctx = canvas.getContext('2d')
    const CANVAS_WIDTH = canvas.width = 600
    const CANVAS_HEIGHT = canvas.height = 600

    const playerImg = new Image()

    playerImg.src = 'img/dog.jpeg'

    let x = 0
    let y = 0

    function animate() {
        ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT)
        ctx.fillRect(x, y, 100, 100)
        requestAnimationFrame(animate)

    }
    
    animate()

});