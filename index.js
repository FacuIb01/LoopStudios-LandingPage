let buttonBurger = document.getElementById("buttonBurger")
let navMobile = document.getElementsByClassName("burgerNavHide")[0]
let closeNav = document.getElementById("closeNavMobile")
let body = document.getElementsByTagName("body")[0]


closeNav.addEventListener("click", () => {
    body.style.overflow = "unset"

    navMobile.classList.replace("animationShow", "animationHide")
    setTimeout(() => {
        navMobile.classList.replace("burgerNav", "burgerNavHide")

    },900)

})

buttonBurger.addEventListener("click", () => {

    navMobile.classList.replace("burgerNavHide", "burgerNav")
    navMobile.classList.replace("animationHide", "animationShow")
    
    body.style.overflow = "hidden"
})