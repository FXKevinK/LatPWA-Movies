const container = document.querySelector(".container")
const coffees = [
  { name: "Star Wars", image: "images/starwars.jpg" },
  { name: "Jumanji", image: "images/jumanji.jpg" },
  { name: "Lord of the Rings", image: "images/lotr.jpg" },
  { name: "Harry Potter", image: "images/harry.jpg" },
  { name: "Avatar", image: "images/avatar.jpg" },
  { name: "Ice Age", image: "images/iceage.jpg" },
  { name: "The Hobbit", image: "images/hobbit.jpg" },
  { name: "Spiderman", image: "images/spiderman.jpg" },
  { name: "Toy Story", image: "images/toystory.jpg" },
]

const showCinemas = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Rates</a>
                </div>
                `)
    )
    container.innerHTML = output
}
  
document.addEventListener("DOMContentLoaded", showCinemas)

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
}
  