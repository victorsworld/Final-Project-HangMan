let letters = document.querySelector('.parent')
let alphL = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'J',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

let create = 'placeholder'
let place = 'placeholder'
let target = 'placeholder'
let num = 10




let base = document.querySelector('.base')
let post = document.querySelector('.post1')
//Box format of Alhabet
for (let i = 0; i < alphL.length; i++) {
  //create element 'button' for each letter of variable alphL ↓
  create = document.createElement('button')

  //add a id to the elements created
  create.setAttribute('id', 'alphabet')
  //adds it to a class list named alphabet with a second indicator of the letter. ↓
  create.classList.add(`${alphL[i]}`)

  //create the style and text ↓
  create.style.backgroundColor = '#f4e5c2'
  create.style.border = 'solid black 1px'
  create.style.borderRadius = '10px'
  create.style.textAlign = 'center'
  create.style.width = '3.5rem'
  create.style.height = '3rem'
  create.style.lineHeight = '50px'
  create.innerText = `${alphL[i].toUpperCase()}`
  letters.appendChild(create)
}

let count = document.querySelector('.count-down')
let down = document.createElement('p')
down.innerText = `${num}`
down.style.width = '4rem'
down.style.height = '3.5rem'
down.style.border = 'black solid 3px'
down.style.textAlign = 'center'
down.style.marginLeft = '80%'
down.style.marginRight = '10%'
down.style.borderRadius = '10px'
down.style.backgroundColor = '#f4e5c2'
down.style.fontSize = '50px'
down.classList.add('count-down')
count.appendChild(down)


//API Call For Random Word Generator
let = call = async () => {
  let res = await fetch(
    'https://random-word-api.vercel.app/api?words=1&length=5'
  )
  let data = await res.json()

  //reassignment of variable create
  create = document.querySelectorAll('#alphabet')

  //random word holder
  let rWord = ''

  //creating the word count for Line Count for HangMan
  let guess = document.querySelector('.guess')
  for (let i = 0; i < data[0].length; i++) {
    rWord += data[0][i]
    place = document.createElement('span')
    place.setAttribute('id', 'container')
    place.classList.add(data[0][i])
    place.innerText = '_'
    place.style.textAlign = 'center'
    place.style.width = '4rem'
    place.style.height = '4rem'
    place.style.lineHeight = '50px'
    guess.appendChild(place)
  }

  create.forEach((i) => {
    i.addEventListener('click', (event) => {
      event.preventDefault()
      target = i
      let a = ''
      //   console.log(place)

      let spans = document.getElementsByTagName('span')
      

      if (count.innerText > 0) {
        for (let i = 0; i < spans.length; i++) {
          if (target.innerText.toLowerCase() === spans[i].className) {
            spans[i].innerText = target.innerText
            target.style.backgroundColor = '#0b8457'
            target.style.textDecoration = 'line-through'
          }
        }

        if (!rWord.includes(target.innerText.toLowerCase()) && target.style.backgroundColor === 'rgb(244, 229, 194)') {
          num = num - 1
          down.innerText = num
          target.style.backgroundColor = '#fd5959'
          target.style.textDecoration = 'line-through'
          if (down.innerText === '9') {
            console.log('worked')
            base.style.opacity = '1'
          } else if (down.innerText === '8') {
            console.log('worked')
            console.log(post.style.opacity)
            post.style.opacity = '1'
          } else if (down.innerText === '7') {
            console.log('worked')
            let a = document.querySelector('.postframe')
            a.style.opacity = '1'
          } else if (down.innerText ==='6') {
            let a = document.querySelector('.rope')
            a.style.opacity = '1'
          } else if (down.innerText === '5') {
            let a = document.querySelector('.head')
            a.style.opacity = '1'
          } else if (down.innerText ==='4') {
            let a = document.querySelector('.body')
            a.style.opacity = '1'
          } else if (down.innerText === '3') {
            let a = document.querySelector('.left-arm')
            a.style.opacity = '1'
          } else if (down.innerText === '2') {
            let a = document.querySelector('.right-arm')
            a.style.opacity = '1'
          } else if (down.innerText ==='1') {
            let a = document.querySelector('.left-leg')
            a.style.opacity = '1'
          } else if (down.innerText === '0') {
            let a = document.querySelector('.right-leg')
            a.style.opacity = '1'
            let b = document.querySelector('.hang-man')
          }
          
        }
        
      }
      
      else {
        alert(`You Lost. The word was: ${rWord.toLocaleUpperCase()}!`)
      }
    })

    i.addEventListener('mouseenter', () => {
      i.style.boxShadow = '0px 37px 20px -20px rgba(0, 0, 0, 0.4)'
      i.style.transform = 'translateY(-10px)'
    })

    i.addEventListener('mouseout', () => {
      i.style.boxShadow = '0px 0px 0px 0px rgba(0, 0, 0, 0)'
      i.style.transform = 'translateY(0px)'
    })
  })
}

call()
