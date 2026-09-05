
const cartIcon = document.getElementById("cartIcon");
const sidebar = document.querySelector(".Sidebar");
const cartItems = document.getElementById("cartItems");
const clearCartBtn = document.getElementById("clearCartBtn");
const cartBadge = document.getElementById("cartBadge");

// local storage 
let items = JSON.parse(localStorage.getItem("cartItems")) || [];

// cart open close
cartIcon.addEventListener("click", function () {
    sidebar.classList.toggle("open");
});

// count badge function
function loadBadge(){
    cartBadge.innerText = items.length;
}

// add buttons
const addButtons = document.querySelectorAll(".cart-btn");

addButtons.forEach(function (btn) {

    btn.addEventListener("click", function () {

        const box = btn.closest(".course-box");

        const imgSrc = box.querySelector(".course-img").src;
        const titleText = box.querySelector("h2").innerText;
        const priceText = box.querySelector(".new").innerText;

        const item = {
            img: imgSrc,
            title: titleText,
            price: priceText
        };

        items.push(item);

        localStorage.setItem("cartItems", JSON.stringify(items));

        createCartElement(imgSrc, titleText, priceText);

        loadBadge();

    });

});

function createCartElement(imgSrc, titleText, priceText) {

    const div = document.createElement("div");
    div.classList.add("cart-item");

    const itemRow = document.createElement("div");
    itemRow.classList.add("cart-item-top");

    const img = document.createElement("img");
    img.src = imgSrc;

    const title = document.createElement("h4");
    title.innerText = titleText;

    const price = document.createElement("p");
    price.innerText = priceText;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-btn");

    itemRow.appendChild(img);
    itemRow.appendChild(title);
    itemRow.appendChild(price);

    div.appendChild(itemRow);
    div.appendChild(deleteBtn);

    cartItems.appendChild(div);

    // delete event
    deleteBtn.addEventListener("click", function () {

        div.remove();

        items = items.filter(function(item){
            return !(item.title === titleText && item.price === priceText);
        }); 

        localStorage.setItem("cartItems", JSON.stringify(items));

        loadBadge();

    });

}

// clear cart
clearCartBtn.addEventListener("click", function() {

    cartItems.innerHTML = "";

    items = [];

    localStorage.removeItem("cartItems",JSON.stringify(items));

    loadBadge();

});

items.forEach(function(item){
    createCartElement(item.img, item.title, item.price);
});
loadBadge();