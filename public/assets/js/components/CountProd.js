function CountProd() {
    let bagage = [];
    let numberOfProd = document.querySelector('.numberOfProd');

   
    bagage = JSON.parse(localStorage.getItem('obj'));

    if (localStorage.getItem('obj')) {
        console.log(numberOfProd.textContent);
        numberOfProd.textContent = bagage.length;
    }

}

export {CountProd};