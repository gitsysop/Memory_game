document.addEventListener('DOMContentLoaded', () => {
    //card array
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
    let cardsSelected = []
    let cardsSelectedId = []
    let cardsMatched = []
  
    //game board
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
      const optionOneId = cardsSelectedId[0]
      const optionTwoId = cardsSelectedId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/black.png')
        cards[optionTwoId].setAttribute('src', 'images/black.png')
        alert('You have clicked the same image!')
      }
      else if (cardsSelected[0] === cardsSelected[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/smiley.png')
        cards[optionTwoId].setAttribute('src', 'images/smiley.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsMatched.push(cardsSelected)
      } else {
        cards[optionOneId].setAttribute('src', 'images/black.png')
        cards[optionTwoId].setAttribute('src', 'images/black.png')
        alert('Sorry, try again')
      }
      cardsSelected = []
      cardsSelectedId = []
      resultDisplay.textContent = cardsMatched.length
      if  (cardsMatched.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You win!'
      }
    }
  
    //flip card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsSelected.push(cardArray[cardId].name)
      cardsSelectedId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsSelected.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })