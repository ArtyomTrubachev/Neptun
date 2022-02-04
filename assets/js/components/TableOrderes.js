import { getData } from '../services/getData.js';

getData('https://ordernept-default-rtdb.firebaseio.com/.json')
.then(data => showOrderes(Object.values(data)));


function showOrderes(orderes) {
    let divOrder = document.querySelector('.usersOderes');

    orderes.forEach(element => {
        divOrder.innerHTML += paintOrderes(element);
    });
}

function paintOrderes(el) {
    return `
    <div class="containerUsersOrderes">
        <div class="date">${el.Date}</div>
        <div class="phone">${el.Phone}</div>
        <div class="fullName">${el.FullName}</div>
        <div class="adress">${el.Adress}</div>
        <div class="oder">${el.BookedProducts}</div>
        <div class="cost">${el.TotalCost} P</div>
        <div class="status">Выполнить</div>
    </div>
     `
}

export {showOrderes};
export {paintOrderes};