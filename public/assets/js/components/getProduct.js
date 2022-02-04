    import { postData } from '../services/PostData.js';
    import { getData } from '../services/getData.js';
    import { deleteData } from '../services/deleteData.js';
    
    
    document.querySelector('.createInfo').addEventListener('click', ()=> {
        let catalog ='';

        let urlValue = document.querySelector('.input_url').value;
        let nameValue = document.querySelector('.input_name').value;
        let countValue = document.querySelector('.input_count').value;
        let costValue = document.querySelector('.input_cost').value;
        let valutaValue = document.querySelector('.selectValuta').value;
        let chapterValue = document.querySelector('.selectСhapter').value;

        switch(chapterValue) {
            case "Бакалея":
                    catalog = 'grocery';
                    break;
            case "Сыры":
                    catalog = 'chease';
                    break;
            case "Замороженные овощи":
                    catalog = 'frozenVegetables';
                    break;
            case "Мороженое":
                    catalog = 'ice-creme';
                    break;
            case "Кондитерские изделия":
                    catalog = 'Bakery';
                    break;
            case "Соки, воды":
                    catalog = 'water';
                    break;
            case "Рыба и морепродукты":
                    catalog = 'Fish';
                    break;
            case "Крабовые палочки":
                    catalog = 'Crab sticks';
                    break;

        }

        let objProduct = {
            url : urlValue,
            name : nameValue,
            count : countValue,
            cost : costValue,
            valuta : valutaValue,
            chapter : chapterValue,
        }
        console.log(objProduct);
        console.log(catalog);

        postData(`https://neptun-14ea0-default-rtdb.firebaseio.com/${catalog}.json`, objProduct);
        alert('Продукт успешно создан!');

        document.querySelector('.input_url').value = "";
        document.querySelector('.input_name').value = "";
        document.querySelector('.input_count').value = "";
        document.querySelector('.input_cost').value = "";

    })

    document.querySelector('.LogOut').addEventListener('click', ()=> {
        localStorage.clear();
    })

    document.querySelector('.Prod').addEventListener('click', ()=> {
            document.querySelector('.container').classList.add('hidden');
            document.querySelector('.welcome').classList.add('hidden'); 
            document.querySelector('.decor').classList.remove('hidden');
            document.querySelector('.containerOderes').classList.add('hidden');
    })

    document.querySelector('.CloseTask').addEventListener('click', ()=> {
        document.querySelector('.container').classList.remove('hidden');
        document.querySelector('.decor').classList.add('hidden');
        document.querySelector('.welcome').classList.remove('hidden');
        document.querySelector('.containerOderes').classList.add('hidden');

})


//Кнопка заказы пользователей
function fetchOrder() {
        getData('https://ordernept-default-rtdb.firebaseio.com/.json')
        .then(data => {
                data ? showOrderes(Object.entries(data)) : [], 
                deleteOrder()});
        
        
        function showOrderes(orderes) {
            let divOrder = document.querySelector('.usersOderes');
        
            orderes.forEach(element => {
                divOrder.innerHTML += paintOrderes(element);
/*                 console.log(element); */
                element.forEach(el => {
/*                         console.log(el);   */   
                })
            })
        }
        
        function paintOrderes(el) {
            return `
            <div class="containerUsersOrderes">
                <div class="date">${el[1].Date}</div>
                <div class="phone">${el[1].Phone}</div>
                <div class="fullName">${el[1].FullName}</div>
                <div class="adress">${el[1].Adress}</div>
                <div class="oder">${el[1].BookedProducts}</div>
                <div class="cost">${el[1].TotalCost} ₽</div>
                <div class="status" id="${el[0]}">Выполнить</div>
            </div>
             `
        }
}

document.querySelector('.Choose').addEventListener('click', () => {
        document.querySelector('.welcome').classList.add('hidden');  
        document.querySelector('.container').classList.add('hidden');
        document.querySelector('.titleOrderes').classList.remove('hidden');
        document.querySelector('.containerOderes').classList.remove('hidden');

        fetchOrder();
})

function deleteOrder() {
let btnVyp = document.querySelectorAll('.status');
btnVyp.forEach(element => {
        element.addEventListener('click', () => {
                console.log(element.id);
                deleteData(`https://ordernept-default-rtdb.firebaseio.com/${element.id}.json`)
                .then(() => {
                        document.querySelector('.usersOderes').innerHTML = '';
                        fetchOrder();
                })
                
})
})
}



