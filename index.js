(function () {

var img = document.querySelector('.video img')
var up = document.querySelector('.up')
var down = document.querySelector('.down')
var ivl
var isPlaying = false
var currentFrame = 51

function imgUrl (i) {
  return 'img_small/' + i + '.jpg'
}

function preload () {
  var preImg
  for (var i = currentFrame; i <= 394; i++) {
    preImg = document.createElement('img')
    preImg.style.display = 'none'
    preImg.src = imgUrl(i)
    document.body.appendChild(preImg)
    if (i === 100) {
      document.querySelector('.loading').style.display = 'none'
      img.src = imgUrl(currentFrame)
    }
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
    if (currentFrame > 394 || currentFrame === 0) {
      clearInterval(ivl)
      isPlaying = false
      return
    }
    img.src = imgUrl(currentFrame)
  }, 40)
}

}())
