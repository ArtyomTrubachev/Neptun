
import { PlaceOrder } from './PlaceOrder.js';

let divBlockProd = document.querySelector('.container_with_items');
let divCost = document.querySelector('.totalCost');

divCost.innerHTML = '0 ₽';
checkLS();
showCost();

function checkLS() {
if (localStorage.getItem('obj')) {

    let objectFromLS = JSON.parse(localStorage.getItem('obj'));
    let idi = 0;

    objectFromLS.forEach(element => {
        divBlockProd.innerHTML += paintCard(element,idi);
        idi++;
    });
    }
}

function paintCard(element, num) {
    return `
        <div class="item_container">
            <div class="image_item">
                <img src="${element.url}" alt="" width="220" height="220">
            </div>

            <div class="info_item" id="${num}">

                <div class="title_item">${element.name}</div>

                <div class="number_item">${element.count}</div>

                <div class="price_item">${element.cost} ₽</div>

                <div class="divButton_delete">
                    <button class="btn_delete">Удалить</button>
                </div>  
                </div>   
            </div>
         </div>


    `
}

function showCost() {

    let arrayOfProductInLS = JSON.parse(localStorage.getItem('obj'));
    let sum = 0;

    arrayOfProductInLS.forEach(element => {
        sum += Number(element.cost); 
    })

    divCost.innerHTML = `${sum} ₽`;

}

document.querySelector('.createInfo').addEventListener('click', ()=> {
    localStorage.clear();
    divBlockProd.innerHTML = '';
    divCost.innerHTML = '0 ₽';

})


let btnGarbDelete = document.querySelectorAll('.btn_delete');
btnGarbDelete.forEach(element => {
    element.addEventListener('click', ()=> {
        let elementID = element.parentElement.parentElement.id;

        let arrayOfProductInLS = JSON.parse(localStorage.getItem('obj'));

        arrayOfProductInLS.splice(elementID,1);

        localStorage.setItem('obj', JSON.stringify(arrayOfProductInLS));
        divBlockProd.innerHTML = ''; 
        checkLS();
        location.reload();

})
})

document.querySelector('.Order').addEventListener('click', ()=> {
    PlaceOrder();
    window.location = 'index.html';
})

