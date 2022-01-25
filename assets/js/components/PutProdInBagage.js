function putProdInBagage() {
    let btnBagage = document.querySelectorAll('.divButton_in_garbage');

    btnBagage.forEach(element => {
        element.addEventListener('click', ()=> {

           let divTitleItem = element.parentElement.parentElement.querySelector('.title_item').textContent;
           let divNumberItem = element.parentElement.parentElement.querySelector('.number_item').textContent;
           let divPriceItem = element.parentElement.parentElement.querySelector('.price_item').textContent;
           let divUrl = element.parentElement.parentElement.querySelector('.imgUrl').src;

            let obj = {};

            obj = {
                'name' : divTitleItem,
                'count' : divNumberItem,
                'cost' : divPriceItem,
                'url' : divUrl,
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
}

export {putProdInBagage};