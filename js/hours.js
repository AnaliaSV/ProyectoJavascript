// cambiarle el titulo segun la hora

// titulo almuerzo

let date = new Date();
let currentHour = date.getHours(); 
let combosPromo = document.getElementById('promocion-almuerzo');

let hours = [{
    open: 6,
    close: 10,
    message: 'Hora del desayuno'
},{
    open: 12,
    close: 14,
    message: 'Hora del almuerzo'
},{
    open: 16,
    close:19,
    message: 'Hora de la merienda'
},{
    open: 20,
    close: 23,
    message: 'Hora del Cena'
}];

let msg='';


    hours.forEach((hour) => {
        if(currentHour>=12 && currentHour<20){
            msg=' 2x1 French Fries'
        }else {
            msg='Fries Provenzal'
        }
    
        })
    
    combosPromo.textContent=msg;


//  titulo merienda
let currentHourMerienda = date.getHours();
let combosPromoMerienda = document.getElementById('promocion-merienda');

hours.forEach((hour) => {
    if(currentHourMerienda >= 20&&currentHourMerienda<23){
        msg= "2x1 Double Burguer"
    }else {
        msg='Cheeseburguer'
    }

    })
    combosPromoMerienda.textContent=msg;

      
    //titulo Cena
let currentHourCena = date.getHours();
let combosPromoCena = document.getElementById('promocion-cena');

hours.forEach((hour) => {
    if(currentHourCena>=20 && currentHourCena<23){
        msg='2x1 Double Burguer'
    }else {
        msg='Double Burguer'
    }

    })
    combosPromoCena.textContent=msg;
