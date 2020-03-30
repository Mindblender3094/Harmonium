const W_KEYS = ['a','s','d','f','g','h','j']
const B_KEYS = ['w','e','t','y','u']

const wkeys = document.querySelectorAll('.key.white')
const bkeys = document.querySelectorAll('.key.black')
const keys = document.querySelectorAll('.key')

keys.forEach(key => {
	key.addEventListener('click', () => play(key))
})

document.addEventListener('keydown', e => {
	if (e.repeat) return
	const key = e.key
	const wkindex = W_KEYS.indexOf(key)
	const bkindex = B_KEYS.indexOf(key)

	if(wkindex > -1) play(wkeys[wkindex])
	if(bkindex > -1) play(bkeys[bkindex])	
})

function play(key)
{
   const audionote = document.getElementById(key.dataset.note)
   audionote.currentTime = 0;
   audionote.play()
   key.classList.add('active')
   audionote.addEventListener('ended', () => {
   	key.classList.remove('active')
   })
}