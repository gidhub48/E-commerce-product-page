let openMenu = document.getElementById("open-menu")
let closeMenu = document.getElementById("close-menu")

let menu = document.getElementById("mobile-menu")
let menuBackdrop = document.getElementById("mobile-menu-backdrop")

let avatar = document.getElementById("avatar")
let cart = document.getElementById("cart")
let clientOrders = document.getElementById("client-orders")


closeMenu.addEventListener("click", function() {
    menu.style.transform = "translateX(-100%)"
    menuBackdrop.style.opacity = "0"
    setTimeout(() => {
        menuBackdrop.style.display = "none"
    }, 300);

})

openMenu.addEventListener("click", function() {
    menuBackdrop.style.display = "block"
    menuBackdrop.style.opacity = "0.75"
    menu.style.transform = "translateX(0)"
})


let scale = 0
clientOrders.style.transformOrigin = "top"

cart.addEventListener("click", function() {
    if (scale === 0) {
        clientOrders.style.transform = `scaley(${scale + 1})`
        scale++
    }else{
        clientOrders.style.transform = `scaley(${scale - 1})`
        scale--
    }
    
})

let mainImg = document.getElementById("change-image").src
let mainImg1 = document.getElementById("img1")
let mainImg2 = document.getElementById("img2")
let mainImg3 = document.getElementById("img3")
let mainImg4 = document.getElementById("img4")


let imgFileName = /[\/][a-z\-0-9]+(.jpg|.png)/gi
console.log(mainImg.match(imgFileName)[0].substring(1));

let addToCart = document.getElementById("addToCart")

let increase = document.getElementById("increase")
let quantity = document.getElementById("quantity")
let decrease = document.getElementById("decrease")

let basket = document.getElementById("basket")
let price = document.getElementById("price")
let total = 0

let empty = document.getElementById("empty-basket")
let fill = document.getElementById("filled-basket")
let checkout = document.getElementById("checkout");

let ordersPrice = document.getElementById("your-order-price")

increase.addEventListener("click", function() {
    total++
    quantity.innerHTML = total
})

decrease.addEventListener("click", function() {
    return (total === 0) ? total : total--,quantity.innerHTML = total
})

const cartN = document.getElementById("cart-n")

addToCart.addEventListener("click", function() {
    if (quantity.innerHTML === "0") {
        return
    }
    else{
        let howMany = parseInt(quantity.innerHTML)
        let p = 125

        let sty = document.getElementsByTagName("style")
        sty.innerHTML += `button.cards::before{content: ${quantity.innerHTML};}`

        empty.style.display = "none"
        fill.style.display = "block"
        ordersPrice.innerHTML = `$${p.toFixed(2)} x ${howMany} <span id="total">$${(howMany*p).toFixed(2)}</span>`

        cartN.innerHTML = howMany
    }
})

const cancle = document.getElementById("cancle-order")
cancle.addEventListener("click", function() {
    empty.style.display = "block"
    fill.style.display = "none"
    cartN.innerHTML = ""
})

let purchasingSound = new Audio('sound/Money (sound effect).mp3');

checkout.addEventListener("click", function() {
    empty.style.display = "block"
    fill.style.display = "none"
    empty.innerHTML = "Thanks for purchasing."
    empty.style.color = "#381"
    setTimeout(() => {
        empty.innerHTML = "Your cart is empty."
        empty.style.color = "var(--Dark-grayish-blue)"
    }, 3000);
    total=0
    quantity.innerHTML = total
    purchasingSound.play()
    cartN.innerHTML = ""
})




