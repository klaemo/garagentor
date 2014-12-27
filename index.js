(function main() {

var img = document.querySelector('.video img')
var up = document.querySelector('.up')
var down = document.querySelector('.down')
var ivl
var isPlaying = false
var currentFrame = 1

function imgUrl (i) {
  return 'img_small/' + i + '.jpg'
}

var images = []

function preload() {
  var preImg
  for (var i = currentFrame; i <= 334; i++) {
    preImg = new Image()
    images.push(preImg)
    if (i === 150) {
      preImg.onload = function () {
        document.querySelector('.loading').style.display = 'none'
        img.src = imgUrl(1)
      }
    }
    preImg.src = imgUrl(i)
  }
}

preload()

up.addEventListener('click', function (event) {
  event.preventDefault()

  play('forwards')
}, false)

down.addEventListener('click', function (event) {
  event.preventDefault()
  clearInterval(ivl)
  
  play('backwards')
}, false)

function play (direction) {
  if (isPlaying) {
    isPlaying = false
    clearInterval(ivl)
    return
  }

  isPlaying = true
  ivl = setInterval(function () {
    if (direction === 'forwards') currentFrame++
    if (direction === 'backwards') currentFrame--
    
    // stop at end and beginning
    if (currentFrame > 334 || currentFrame === 1) {
      clearInterval(ivl)
      isPlaying = false
      return
    }
    img.src = imgUrl(currentFrame)
  }, 40)
}

}())
