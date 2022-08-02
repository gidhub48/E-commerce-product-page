let openMenu = document.getElementById("open-menu")
let closeMenu = document.getElementById("close-menu")

let menu = document.getElementById("mobile-menu")
let backdrop = document.getElementById("backdrop")

let avatar = document.getElementById("avatar")
let cart = document.getElementById("cart")
let clientOrders = document.getElementById("client-orders")


closeMenu.addEventListener("click", function() {
    menu.style.transform = "translateX(-100%)"
    backdrop.style.opacity = "0"
    setTimeout(() => {
        backdrop.style.display = "none"
    }, 300);

})

openMenu.addEventListener("click", function() {
    backdrop.style.display = "block"
    backdrop.style.opacity = "0.75"
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

// preview code

let mainPreview = document.querySelector("#mainPreview>img")
let thumbnail = document.querySelectorAll(".thumbnail>img")
let thumbnailPa = document.querySelectorAll(".thumbnail")
let select = 0

for (let i = 0; i < thumbnail.length; i++) {
    thumbnail[i].addEventListener("click", () => {
        let a = thumbnail[i]
        let b = a.getAttribute("src")
        let c = b.replace("-thumbnail", "")
        mainPreview.setAttribute("src", c)
        for (let i = 0; i < thumbnail.length; i++) {
            thumbnailPa[i].classList.remove("select")
        }
        thumbnailPa[i].classList.add("select")

    })
}

let next_btn = document.querySelector("#next-btn")
let previous_btn = document.querySelector("#previous-btn")

next_btn.addEventListener("click",()=>{
    if (select !== thumbnail.length-1) {
        select++
        mainPreview.setAttribute("src", thumbnail[select].getAttribute("src").replace("-thumbnail", ""))
    }
    if (select === thumbnail.length-1) {
        select=0
        mainPreview.setAttribute("src", thumbnail[select].getAttribute("src").replace("-thumbnail", ""))
    }
})
previous_btn.addEventListener("click",()=>{
    if (select !== 0) {
        select--
        mainPreview.setAttribute("src", thumbnail[select].getAttribute("src").replace("-thumbnail", ""))
    }
    if (select === 0) {
        select=thumbnail.length-1
        mainPreview.setAttribute("src", thumbnail[select].getAttribute("src").replace("-thumbnail", ""))
    }
})

let lightbox = document.querySelector("#lightbox")
let close_lightbox = document.querySelector("#close-lightbox>svg")


mainPreview.addEventListener("click", ()=>{
    if (window.innerWidth > 520) {
        lightbox.style.display = "block"
        backdrop.style.display = "block"
        backdrop.style.opacity = "0.75"
    }
})
close_lightbox.addEventListener("click", ()=>{
    lightbox.style.display = "none"
    backdrop.style.display = "none"
})


let lb_thumbnail = document.querySelectorAll(".lightbox-thumbnail")
let lb_mainImg = document.querySelector("#ligthbox-main-img>#main-image")
let prev_selected = 0
let selected = 0

for (let i = 0; i < lb_thumbnail.length; i++) {
    lb_thumbnail[i].addEventListener("click", ()=>{
        console.log(lb_mainImg.src);
        lb_mainImg.setAttribute("src", `images/image-product-${i+1}.jpg`);
        lb_thumbnail[prev_selected].classList.remove("select")
        lb_thumbnail[i].classList.add("select")
        prev_selected = i
        selected = i
    })
}

let lb_next_btn = document.querySelector("#lb-next-btn")
let lb_previous_btn = document.querySelector("#lb-previous-btn")

function changeImg(prev_selected, selected) {
    lb_thumbnail[prev_selected].classList.remove("select")
    lb_thumbnail[selected].classList.add("select")
    lb_mainImg.setAttribute("src", lb_thumbnail[selected].getAttribute("src").replace("-thumbnail", ""));
}


lb_next_btn.addEventListener("click", ()=>{

    if (selected !== lb_thumbnail.length-1) {
        selected++
        changeImg(prev_selected,selected)
        prev_selected++

    }else if (prev_selected === lb_thumbnail.length-1) {
        selected=0
        changeImg(prev_selected,selected)
        prev_selected=0
    }

})

lb_previous_btn.addEventListener("click", ()=>{
    if (selected !== 0) {
        selected--
        changeImg(prev_selected,selected)
        prev_selected--

    }else if (selected === 0) {
        selected = lb_thumbnail.length-1
        changeImg(prev_selected,selected)
        prev_selected = lb_thumbnail.length-1
    }
})





