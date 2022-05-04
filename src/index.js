fetch('http://localhost:3000/ramens')
.then(resp => resp.json())
.then(ramens => {
   
    ramens.forEach(ramenObj => {
        const newImgElement = document.createElement('img')
        newImgElement.src = ramenObj.image

        newImgElement.addEventListener('click', () => {
            createRamenDisplayCard(ramenObj)
        })

        const menuElement = document.querySelector('div#ramen-menu')
        menuElement.appendChild(newImgElement)
    })
})

const newRamenForm = document.querySelector('form#new-ramen')
newRamenForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const newRamenObj = {}
    newRamenObj.name = event.target[0].value
    newRamenObj.restaurant = event.target[1].value
    newRamenObj.image = event.target[2].value
    newRamenObj.rating = parseInt(event.target[3].value)
    newRamenObj.comment = event.target[4].value
    
    const newRamenImgElement = document.createElement('img')
    newRamenImgElement.src = newRamenObj.image
    
    newRamenImgElement.addEventListener('click', () => {
        createRamenDisplayCard(newRamenObj)
    })

    const menuElement = document.querySelector('div#ramen-menu')
    menuElement.appendChild(newRamenImgElement)
    
    newRamenForm.reset()
})

function createRamenDisplayCard(ramenObj) {
    const ramenImg = document.querySelector('img.detail-image')
    const ramenName = document.querySelector('h2.name')
    const ramenRestaurant = document.querySelector('h3.restaurant')
    const ratingDisplay = document.querySelector('span#rating-display')
    const commentDisplay = document.querySelector('p#comment-display')

    ramenImg.src = ramenObj.image
    ramenName.textContent = ramenObj.name 
    ramenRestaurant.textContent = ramenObj.restaurant
    ratingDisplay.textContent = ramenObj.rating
    commentDisplay.textContent = ramenObj.comment
}