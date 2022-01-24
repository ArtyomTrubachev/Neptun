    import { postData } from '../services/PostData.js';
    
    
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
