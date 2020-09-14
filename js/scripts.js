const donBuilder = new DOMBuilder ();

function buildProductCard(combo) {
    const div = document.createElement('div');
    div.classList.add('card-body');

    const image = donBuilder.img(combo.image);
    const title = donBuilder.h5(combo.name);      
    const description = donBuilder.p(combo.description);
    const price= donBuilder.p(combo.price);
    const button=donBuilder.button('add to cart', 'btnProduct','btn','btn-primary',combo.id);

    div.appendChild(image)
    div.appendChild(title)
    div.appendChild(description)
    div.appendChild(price)
    div.appendChild(button);

    return div;
}

 function buildSelectedProducts() {
       const selectedProductsContainer = document.getElementById('selectedProductsContainer');
       const lastProduct = selectedProducts[selectedProducts.length-1];
       const card = buildProductCard(lastProduct);
       selectedProductsContainer.appendChild(card); 
}

function onSelectClick(event) {
    const selectedId = event.target.dataset.id;
    
    let selectedProduct ={};
         combos.forEach(combo => {
             if(parseInt(combo.id) === parseInt(selectedId)) {
                 selectedProduct=combo;
             }
         });

         selectedProducts.push(selectedProduct);
         buildSelectedProducts()
         console.log(selectedProduct);
    }
window.addEventListener('DOMContentLoaded', () => {
     const productsContent = document.getElementById('productsContent');
    
     combos.forEach(combo=>{
        const card =buildProductCard(combo);
        productsContent.appendChild(card);
        });

    const btnProducts = document.querySelectorAll(".btnProduct");
    btnProducts.forEach(btnProduct => {
        btnProduct.addEventListener("click", onSelectClick)
    })
});




//Hay dos div en html para poder poner el evento de cambiarle el titulo segun la hora

let date = new Date();
let currentHour = date.getHours(); 
let combosPromo = document.getElementById('promocion-varias');

let hours = [{
    open: 6,
    close: 10,
    message: 'Hora del desayuno'
},{
    open: 12,
    close: 15,
    message: 'Hora del almuerzo'
},{
    open: 16,
    close:19,
    message: 'Hora de la merienda'
},{
    open: 20,
    close: 24,
    message: 'Hora del Cena'
}];

let msg='sin promo';

    hours.forEach((hour) => {
    if(currentHour >= hour.open&&currentHour<hour.close){
        msg=hour.message;
    }

    })

combosPromo.textContent=msg;

//segunda promo, pero almuerzo solamente
let date1 = new Date();
let currentHourAlmuerzo = date.getHours();
let combosPromoAlmuerzo = document.getElementById('promocion-almuerzo');

hours.forEach((hour) => {
    if(currentHour>=12 && currentHour<15){
        msg='Segunda Promo almuerzo'
    }else {
        msg='sin promo 2'
    }

    })
    combosPromoAlmuerzo.textContent=msg;
