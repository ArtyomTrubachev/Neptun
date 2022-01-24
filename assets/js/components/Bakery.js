import { getData } from '../services/getData.js';
import { paintCardProduct } from './paintCard.js';
import { putProdInBagage } from './PutProdInBagage.js';
import { CountProd } from './CountProd.js';

getData('https://neptun-14ea0-default-rtdb.firebaseio.com/Bakery.json')
.then(data => {paintCardProduct(Object.values(data)), CountProd(), putProdInBagage()} );