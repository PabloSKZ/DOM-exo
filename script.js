/* Fonction 1 */

let footer = document.getElementsByTagName('footer')[0]
let footClickCount = 0

footer.addEventListener("click", function(){ 
    footClickCount++
    console.log('clique numéro ' + footClickCount)
})

/* Fonction 2 */

let hamburgerMenu = document.getElementsByClassName('navbar-toggler-icon')[0]

hamburgerMenu.addEventListener("click", function(){
    let navbarHeader = document.getElementById("navbarHeader")
    navbarHeader.classList.toggle("collapse");
})

/* Fonction 3 */

let firstEdit = document.querySelector(".card-body div .btn-outline-secondary")

firstEdit.addEventListener("click", function(){
    let firstCardText = document.querySelector(".card-body .card-text")
    firstCardText.classList.add("text-danger");
})


/* Fonction 4 */

let secondEdit = document.querySelectorAll(".card-body div .btn-outline-secondary")[1]

secondEdit.addEventListener("click", function(){
    let secondCardText = document.querySelectorAll(".card-body .card-text")[1]
    secondCardText.classList.toggle("text-success");
})


/* Fonction 5 */

let header = document.getElementsByTagName('header')[0]

header.addEventListener("dblclick", function(){
    let link = document.getElementsByTagName("link")[0]
    let disabled = document.createAttribute('disabled')
    if (link.hasAttribute('disabled')) {
        link.removeAttribute('disabled')
    } else {
        link.setAttributeNode(disabled);
    }
})


/* Fonction 6 */

for (i=0; i < 6; i++) {
    let view = document.querySelectorAll(".card-body div .btn-success")[i]
    let cardText = document.querySelectorAll(".card-body .card-text")[i]
    let image = document.querySelectorAll(".card-img-top")[i]

    view.addEventListener("mouseover", function(){
        cardText.classList.toggle("collapse")
        let style = document.createAttribute("style")
        style.value = "width: 20%;"
        if (image.hasAttribute('style')) {
            image.removeAttribute('style')
        } else {
            image.setAttributeNode(style)
        }
    })
}


