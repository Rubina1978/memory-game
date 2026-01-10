
const cardArray = [
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
  
]


/*shuffle formula*/
cardArray.sort(() => 0.5 - Math.random())


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


function createBoard (numCards) {
    gridDisplay.innerHTML = ''
    
    const columns = getColumns(numCards)
    gridDisplay.style.gridTemplateColumns = `repeat(${columns}, 1fr)`

    cardArray.slice(0, numCards).forEach((_, index) => {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/card-back.jpg')
      card.setAttribute('data-id', index)
      gridDisplay.appendChild(card)
      
    })
  
}














