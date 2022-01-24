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
        array.forEach(element => {
            (Object.values(element)).forEach(el => {
                let arr = el.name.split(' ');

                if (arr[0] == divInput.value) {
                    
                   
                    divBlockItems.innerHTML += paintCard(el);
                }
            })
        })
    }

})
