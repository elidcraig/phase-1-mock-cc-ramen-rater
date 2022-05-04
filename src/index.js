fetch('http://localhost:3000/ramens')
.then(resp => resp.json())
.then(ramens => {

    const menuElement = document.querySelector('div#ramen-menu')

    ramens.forEach(ramenObj => {
        const newImgElement = document.createElement('img')
        newImgElement.src = ramenObj.image

        const detailsElement = document.querySelector('div#ramen-detail')
        newImgElement.addEventListener('click', () => {

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

        })

        menuElement.appendChild(newImgElement)
    })
})