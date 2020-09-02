//arrays

let combo1 = ["carne vacuna", "pan frances", "jamon","queso" , "papas", "gaseosa"];
let combo2 = ["carne cerdo" ,"pan negro","lechuga", "tomate", "rabas", "agua mineral"];
let combo3 = ["milanesa de soja" ,"pan integral","lechuga", "tomate", "ensalada", "agua savorizada"];

let pedidos=[];

//************PRECIOS***************
let precioCombo1 =300;
let precioCombo2 =400;
let precioCombo3 =500;
let precioEnvio =100;

//cambia titulo de la comida en base a la promo

let date = new Date();
let currentHour = date.getHours(); 
console.log(currentHour);// te dice la hora
let combosPromo = document.getElementById('promocion-varias');

let hours =[
    [7,11,'Promo desayuno'],
    [12,15,'Promo almuerzo'],
    [17,19,'Promo merienda'],
    [20,23,'Promo cena']
];

let msg='sin promo';

    hours.forEach((hour) => {
    if(currentHour >= hour[0]&&currentHour<hour[1]){
        msg=hour[2];
    }

    })

combosPromo.textContent=msg;

//segunda promo, pero almuerzo solamente
let date1 = new Date();
let currentHourAlmuerzo = date.getHours();
console.log(currentHourAlmuerzo);
let combosPromoAlmuerzo = document.getElementById('promocion-almuerzo');

hours.forEach((hour) => {
    if(currentHour>=12 && currentHour<15){
        msg='Segunda Promo almuerzo'
    }else {
        msg='sin promo 2'
    }

    })
    combosPromoAlmuerzo.textContent=msg;

    //  EN LA PAGINA carrito.html AGREGUE ESTO EN UN SCRIPT
    /*
            let combo1 = ["1- carne vacuna", "2- pan frances", "3- jamon","4- queso" , "5- papas", "6- gaseosa"];
            let combo2 = ["1- carne cerdo" ,"2- pan negro","3- lechuga", "4- tomate", "5- rabas", "6- agua mineral"];
            let combo3 = ["1- milanesa de soja" ,"2- pan integral","3- lechuga", "4- tomate", "5- ensalada", "6- agua savorizada"];
            
            let miPedido = [];

            let carritoContainer =document.getElementById('carrito-container');
            let formContent = document.getElementById('form-content');
            formContent.addEventListener('submit', function(event) {
            event.preventDefault();
            let pedido = event.target.elements.pedido.value
            miPedido.push(pedido);
            pedidoTodo();
        })
            function pedidoTodo() {
            if(miPedido.length > 0) {
              carritoContainer.appendChild(buildItem(miPedido.pop()));
            }
        }

          combo1.forEach(menuContent => { 
          let item =document.createElement('li');
          item.textContent=menuContent;
          carritoContainer.appendChild(item);
          });

          function buildItem(todoItem) {
          let item = document.createElement('li');
          item.textContent = todoItem;
          return item;
        }
    */