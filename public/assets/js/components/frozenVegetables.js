
import { getData } from '../services/getData.js';
import { paintCardProduct } from './paintCard.js';
import { putProdInBagage } from './PutProdInBagage.js';
import { CountProd } from './CountProd.js';

getData('https://neptun-14ea0-default-rtdb.firebaseio.com/frozenVegetables.json')
.then(data => {paintCardProduct(Object.values(data)), CountProd(), putProdInBagage()} );


/* function test() {
    let btnBagage = document.querySelectorAll('.divButton_in_garbage');

    btnBagage.forEach(element => {
        element.addEventListener('click', ()=> {

           let divTitleItem = element.parentElement.parentElement.querySelector('.title_item').textContent;
           let divNumberItem = element.parentElement.parentElement.querySelector('.number_item').textContent;
           let divPriceItem = element.parentElement.parentElement.querySelector('.price_item').textContent;

            let obj = {};

            obj = {
                'name' : divTitleItem,
                'count' : divNumberItem,
                'cost' : divPriceItem,
            }

            let bagage = [];
            let numberOfProd = document.querySelector('.numberOfProd');
            let oldBagage = JSON.parse(localStorage.getItem('obj'));

        
            if (localStorage.getItem('obj')) {
                bagage = oldBagage;
            }
            

            bagage.push(obj);
            localStorage.setItem('obj', JSON.stringify(bagage))
            numberOfProd.textContent = bagage.length;
        })
    })   
 
}*/












