// une variable pour récupérer depuis mon fichier html l'id "name"
let text = document.getElementById('name')
let btn = document.getElementById('btn')
let logo = document.getElementById('logo')
let citation = document.getElementById('citation')

// création événement lors d'un click
btn.addEventListener('click', updatePage)
function updatePage() {
    text.innerText = 'Bill Gates'
    citation.innerText = "Le logiciel est une excellente combinaison entre l'art et l'ingénierie"
    logo.setAttribute('src', "https://upload.wikimedia.org/wikipedia/commons/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg")
}