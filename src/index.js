// write your code here
const ramenMenu = document.querySelector("#ramen-menu")
const detailImage = document.querySelector(".detail-image")
const detailName = document.querySelector(".name")
const detailRestaurant = document.querySelector(".restaurant")
const detailRating = document.querySelector("#rating-display")
const detailComment = document.querySelector("#comment-display")

fetch("http://localhost:3000/ramens")
.then(res => res.json())
.then(ramens => {
    ramens.forEach(ramen => {
    addRamen(ramen)
    })
})

function addRamen(ramen) {
    const menuItem = document.createElement("img")
      menuItem.src = ramen.image
      ramenMenu.append(menuItem)
      
      menuItem.addEventListener("click", e => {
        detailImage.src = ramen.image
        detailName.textContent = ramen.name
        detailRestaurant.textContent = ramen.restaurant
        detailComment.textContent = ramen.comment
        detailRating.textContent = ramen.rating
    })
}

const formNewRamen = document.querySelector("#new-ramen")

formNewRamen.addEventListener("submit", e => {
    e.preventDefault()
    const formNewName = document.querySelector("#new-name").value
    const formNewRestaurant = document.querySelector("#new-restaurant").value
    const formNewImage = document.querySelector("#new-image").value
    const formNewRating = document.querySelector("#new-rating").value
    const formNewComment = document.querySelector("#new-comment").value

    ramen = {
        name: formNewName,
        restaurant: formNewRestaurant,
        image: formNewImage,
        rating: formNewRating,
        comment: formNewComment
      }
      
    addRamen(ramen)
    e.target.reset()
})