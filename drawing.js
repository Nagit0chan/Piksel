let COLOR = 'rgb(255, 0, 0)'
let IS_CLICKED = false

document.addEventListener('mousedown', function(){
    IS_CLICKED = true
})
document.addEventListener('mouseup', function(){
    IS_CLICKED = false
})




let canvas = document.querySelector('.canvas')

for(let i = 0; i<600; i++){
    let cell = document.createElement('div')
    cell.classList.add('cell')
    canvas.appendChild(cell)
}

let cells = document.querySelectorAll('.cell')

cells.forEach(function(cell){
    cell.addEventListener('mousedown', function(){
        anime({
            targets: cell,
            background: COLOR,
            duration: 200,
            easing: 'linear',
        })
    })
    cell.addEventListener('mouseover', function(){
        if(IS_CLICKED){
            anime({
            targets: cell,
            background: COLOR,
            duration: 200,
            easing: 'linear',
        })
        }
    })
})

let boxes = document.querySelectorAll('.color-box')

boxes.forEach(function(box){
    box.addEventListener('mousedown', function(){
        COLOR = box.style.backgroundColor
        })
})

let erase = document.querySelector('.erase')

erase.addEventListener('mousedown', function(){
    cells.forEach(function(cell){
        anime({
            targets: cell,
            background: 'rgb(40,50,70)',
            duration: 200,
            easing: 'linear',
        })
    })
})

let fill = document.querySelector('.fill')

fill.addEventListener('mousedown', function(){
    cells.forEach(function(cell){
        anime({
            targets: cell,
            background: COLOR,
            duration: 200,
            easing: 'linear',
        })
    })
})

let save = document.querySelector('.save')

save.addEventListener('click', function() {
    domtoimage.toPng(canvas)
    .then(function (dataUrl) {
        window.saveAs(dataUrl, 'piksel.png')
    })
})
