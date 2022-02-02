document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'earth',
        img: 'images/earth.png'
      },
      {
        name: 'venus',
        img: 'images/venus.png'
      },
      {
        name: 'jupiter',
        img: 'images/jupiter.png'
      },
      {
        name: 'moon',
        img: 'images/moon.png'
      },
      {
        name: 'neptune',
        img: 'images/neptune.png'
      },
      {
        name: 'mars',
        img: 'images/mars.png'
      },
      {
        name: 'mars',
        img: 'images/mars.png'
      },
      {
        name: 'neptune',
        img: 'images/neptune.png'
      },
      {
        name: 'moon',
        img: 'images/moon.png'
      },
      {
        name: 'jupiter',
        img: 'images/jupiter.png'
      },
      {
        name: 'venus',
        img: 'images/venus.png'
      },
      {
        name: 'uranus',
        img: 'images/uranus.png'
      },
      {
        name: 'uranus',
        img: 'images/uranus.png'
      },
      {
        name: 'earth',
        img: 'images/earth.png'
      },
      {
        name: 'saturn',
        img: 'images/saturn.png'
      },
      {
        name: 'saturn',
        img: 'images/saturn.png'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#score')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/black.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/black.png')
        cards[optionTwoId].setAttribute('src', 'images/black.png')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/smiley.png')
        cards[optionTwoId].setAttribute('src', 'images/smiley.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/black.png')
        cards[optionTwoId].setAttribute('src', 'images/black.png')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })