
function paintCardProduct(product) {

    let divBlockItems = document.querySelector('.container_with_items');

    product.forEach(element => {
        divBlockItems.innerHTML += paintCard(element);
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

                <div class="divButton_in_garbage">
                    <button class="btn_in_garbage">В корзину</button>
                </div>  
            </div>
        </div>
    `
}

export {paintCard};
export {paintCardProduct};