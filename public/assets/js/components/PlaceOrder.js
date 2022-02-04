import { postData } from '../services/PostData.js';

function PlaceOrder() {
    let divFullName = document.querySelector('.input_FullName').value;
    let divPhone = document.querySelector('.input_Phone').value;
    let divAdress = document.querySelector('.input_Adress').value;

    let objectFromLS = JSON.parse(localStorage.getItem('obj'));
    let bookedProducts = "";
    let totalCost = 0;

    let CurrentDate = new Date().toLocaleString();

    objectFromLS.forEach(element => {
        bookedProducts +=`${element.name} <br>`;
        totalCost += Number(element.cost);
     })

     

     let userOrder = {};

     userOrder = {
         'Date' : CurrentDate,
         'FullName' : divFullName,
         'Phone' : divPhone,
         'Adress' : divAdress,
         'BookedProducts' : bookedProducts,
         'TotalCost' : totalCost,
     }

/*     console.log(userOrder); */

    postData(`https://ordernept-default-rtdb.firebaseio.com/.json`, userOrder);
        alert('Заказ отправлен на обработку');
     
    localStorage.removeItem('obj');
    location.reload();

}


export {PlaceOrder};