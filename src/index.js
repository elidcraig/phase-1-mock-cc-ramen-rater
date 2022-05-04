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
            ramenImg.src = ramenObj.image
            ramenName.textContent = ramenObj.name 
            ramenRestaurant.textContent = ramenObj.restaurant 

        })

        menuElement.appendChild(newImgElement)
    })
})