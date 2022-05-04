fetch('http://localhost:3000/ramens')
.then(resp => resp.json())
.then(ramens => {

    const menuElement = document.querySelector('div#ramen-menu')

    ramens.forEach(ramenObj => {
        const newImgElement = document.createElement('img')
        newImgElement.src = ramenObj.image
        menuElement.appendChild(newImgElement)
    })
})