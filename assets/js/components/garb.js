

document.querySelector('.createInfo').addEventListener('click', ()=> {
    localStorage.clear();
    divBlockProd.innerHTML = '';
})


let divBlockProd = document.querySelector('.container_with_items');

if(localStorage.length >= 1) {
    let objectFromLS = JSON.parse(localStorage.getItem('obj'));

    objectFromLS.forEach(element => {
        divBlockProd.innerHTML += paintCard(element);
    });
}


function paintCard(element) {
    return `
        <div class="item_container">
            <div class="image_item">
                <img src="${element.url}" alt="" width="220" height="220">
            </div>

            <div class="info_item">

                <div class="title_item">${element.name}</div>

                <div class="number_item">${element.count}</div>

                <div class="price_item">${element.cost} ${element.valuta}</div>

                </div>  
            </div>
        </div>
    `
}