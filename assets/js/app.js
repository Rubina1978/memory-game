
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
const cardSelected = []

/*array for chosen cards to be push into*/
const cardsChosenIds = []


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

/*creating columns according to level and number of cards*/
function getColumns(numCards) {
   
    if (numCards === 8) return 4
    if (numCards === 12) return 4
    if (numCards === 16) return 4
}

function buildCardArray(numCards) {
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

    cardArray = buildCardArray(numCards) // ← NEW LINE

    const levelCards = cardArray
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
  
}

function checkMatch() {
    /*search for all images in the entire document*/
    const cards = document.querySelectorAll('#grid img')
    console.log(cards)

    /*get cards to the card array and check if they match*/
   if (cardSelected[0] === cardSelected[1]) {
    alert('this is a match!')
    cards(cardsChosenIds)[0].setAttribute('src', 'images/white.png')
   }
}
       
 
function flipCard() {
    /*on click get data id, this means whichever is clicked it will interact with*/
    const cardId = this.getAttribute('data-id')

    /* picking the name of the card*/
    // cardArray[cardId].name
    cardSelected.push(cardArray[cardId].name)

    /*push cards id to the array*/
    cardsChosenIds.push(cardId)

    /* show (add image)*/
    this.setAttribute('src', cardArray[cardId].img)
    /*check for match*/
    if (cardSelected.length === 2) {
        setTimeout(checkMatch, 500)
         
    }

}














