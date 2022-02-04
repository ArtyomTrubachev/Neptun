import { getData } from "./getData.js";
import { paintCard } from "../components/paintCard.js";


let divInput  = document.querySelector('.input_search_header');
let divSearch  = document.querySelector('.imgSearch');

divSearch.addEventListener('click', ()=> {
/*     console.log(divInput.value); */

    getData('https://neptun-14ea0-default-rtdb.firebaseio.com/.json')
    .then(data => showArray(Object.values(data)));

    function showArray(array) {
        let divBlockItems = document.querySelector('.container_with_items');
        divBlockItems.innerHTML = '';

        let valueInput = divInput.value;
        let valueInputLowerCase = valueInput.toLowerCase();

        array.forEach(element => {
            Object.values(element).forEach(el => {
                console.log(el.name.toLowerCase());
                if (el.name.toLowerCase().includes(valueInputLowerCase)) 
                    divBlockItems.innerHTML += paintCard(el);
            })
        })
    }
})
