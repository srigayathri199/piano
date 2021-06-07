const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}

const white = document.querySelectorAll('.white')
const keyR = document.querySelector('.R')
const keyB = document.querySelector('.B')
const keyG = document.querySelector('.G')
const keyY = document.querySelector('.Y')

console.log(white,keyR,keyB);


const colorChange = function(e,color){
  white.forEach((ele,i)=>{
    ele.style.backgroundColor=color;

  })

}
keyR.addEventListener('click',function(e){

  colorChange(e,'#D3605E')
} )
  
keyB.addEventListener('click',function(e){

  colorChange(e,'#703894')
} )
  
keyG.addEventListener('click',function(e){

  colorChange(e,'#58A33F')
} )
  
keyY.addEventListener('click',function(e){

  colorChange(e,'#D1C230')
} )
  

/* <!-- D3605E -->
<!-- 703894 -->
<!-- 58A33F -->
<!-- D1C230 --> */