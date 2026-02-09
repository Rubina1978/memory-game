
const baseCards = [
    {
        name: 'Baby Metal',
        img: 'images/babymetal.jpg',
    },
    
    {
        name: 'Korn',
        img: 'images/korn.jpg',
    },
    {
        name: 'Limp Bizkit',
        img: 'images/limpbizkit.webp',
    },
    {
        name: 'Pantera',
        img: 'images/pantera.webp',
    },

    {
        name: 'Rammstein',
        img: 'images/Rammstein_-_Sehnsucht.jpg',
    },
    {
        name: 'Slayer',
        img: 'images/slayer.webp',
    },
    {
        name: 'Slipknot',
        img: 'images/slipknot1.jpg',
    },
    {
        name: 'System of Down',
        img: 'images/systemofdown.webp',
    },

    
    // {
    //     name: 'Baby Metal',
    //     img: 'images/babymetal.jpg',
    // },
    
    // {
    //     name: 'Korn',
    //     img: 'images/korn.jpg',
    // },
    // {
    //     name: 'Limp Bizkit',
    //     img: 'images/limpbizkit.webp',
    // },
    // {
    //     name: 'Pantera',
    //     img: 'images/pantera.webp',
    // },

    // {
    //     name: 'Rammstein',
    //     img: 'images/Rammstein_-_Sehnsucht.jpg',
    // },
    // {
    //     name: 'Slayer',
    //     img: 'images/slayer.webp',
    // },
    // {
    //     name: 'Slipknot',
    //     img: 'images/slipknot1.jpg',
    // },
    // {
    //     name: 'System of Down',
    //     img: 'images/systemofdown.webp',
    // 
  
]



/*array created to put inside selected card*/
let cardSelected = []

/*array for chosen cards to be push into*/
let cardsChosenIds = []

let cardsWon = []

let scorePoints = 0

let scoreSpan = []

let interval = null
let timeLeft = 60
let gameOver = false

/*selecting levels*/
function SelectLevel() {
    document.querySelector('#level1').addEventListener('click', () => {
        createBoard(8)
    })
    document.querySelector('#level2').addEventListener('click', () => {
        createBoard(12)
    })
    document.querySelector('#level3').addEventListener('click', () => {
        createBoard(16)
    })
}
SelectLevel()

const gridDisplay = document.querySelector('#grid')
const scoreDisplay = document.querySelector('#score')

/*creating columns according to level and number of cards*/
function getColumns(numCards) {
   
    if (numCards === 8) return 4
    if (numCards === 12) return 4
    if (numCards === 16) return 4
  
}


/*build the deck*/
function buildLevelCards(numCards) {
  const pairsNeeded = numCards / 2

  const selected = baseCards
    .sort(() => 0.5 - Math.random())
    .slice(0, pairsNeeded)

  return [...selected, ...selected]
    .sort(() => 0.5 - Math.random())
}



function createBoard (numCards) {
    /*clear screen*/
    gridDisplay.innerHTML = ''

    /*create columns*/
    const columns = getColumns(numCards)
    gridDisplay.style.gridTemplateColumns = `repeat(${columns}, 1fr)`

    cardArray = buildLevelCards(numCards) // ← NEW LINE
    
        .slice(0, numCards)
        /*shuffle formula*/
        .sort(() => 0.5 - Math.random())


    cardArray.forEach((_, index) => {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/card-back.jpg')
      card.setAttribute('data-id', index)
      card.addEventListener('click', flipCard)
      gridDisplay.appendChild(card)
      
      
    })
  startTimer()
}

function checkMatch() {
    /*search for all images in the entire document*/
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    
if (optionOneId == optionTwoId){
    alert('you have clicked the same image!')
} 

    /*get cards to the card array and check if they match*/
   if (cardSelected[0] === cardSelected[1]) {
    alert('this is a match!')
    cards[optionOneId].setAttribute('src', 'images/white.png')
    cards[optionTwoId].setAttribute('src', 'images/white.png')
    cards[optionOneId].removeEventListener('src', flipCard)
    cards[optionTwoId].removeEventListener('src', flipCard)
    cardsWon.push(cardSelected)
 
   
   } else {
    cards[optionOneId].setAttribute('src', 'images/card-back.jpg')
    cards[optionTwoId].setAttribute('src', 'images/card-back.jpg')
    alert('Sorry try again')
   }
   scoreDisplay.innerHTML = cardsWon.length
   cardSelected = []
   cardsChosenIds = []
   if (cardsWon.length === cardArray.length/2) {
    scorePoints++
    scoreSpan.textContent = scorePoints;
    
    scoreDisplay.innerHTML = 'Congratulations'
        
   }
}
       
 
function flipCard() { 
     if (gameOver) return


    /*on click get data id, this means whichever is clicked it will interact with*/
    const cardId = this.getAttribute('data-id')

    /* picking the name of the card*/
    // cardArray[cardId].name
    cardSelected.push(cardArray[cardId].name)

    /*push chosen cards id to the array*/
    cardsChosenIds.push(cardId)

    /* show (add image)*/
    this.setAttribute('src', cardArray[cardId].img)
    /*check for match*/
    if (cardSelected.length === 2) {
        setTimeout(checkMatch, 500)
         
    }

}

function startTimer() {
    clearInterval(interval)
    timeLeft = 60
    gameOver = false
    updateTimer()
    

    interval = setInterval(() => {
        timeLeft--
        updateTimer()

        if (timeLeft <= 0) {
            clearInterval(interval)
            endGame()
            alert("Time's up!")
            
        }
    }, 1000
)}

function updateTimer() {
    
    const timerDisplay = document.querySelector('#time')
    const minutes = Math.floor(timeLeft/ 60)
    const seconds = timeLeft % 60

    const formattedTime = String(minutes).padStart(2, '0') + ':' +
    String(seconds).padStart(2, '0')

    timerDisplay.textContent = timeLeft
    
}


function endGame() {
    gameOver = true
    alert("times's up!")
    const cards = document.querySelectorAll('#grid img')
    cards.forEach(card => {
        card.style.pointerEvents = 'none'
    })

}













