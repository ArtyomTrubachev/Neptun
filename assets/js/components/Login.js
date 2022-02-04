import {postFBAuth} from '../services/postFBAuth.js';

if (localStorage.getItem('idToken')) {
    window.location = 'admin.html';
}

let divInputEmail = document.querySelector('.input_email');
let divInputPassword = document.querySelector('.input_password');

document.querySelector('.BtnToLogin').addEventListener('click', ()=> {
    postFBAuth('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=', 
               'AIzaSyC0J79g66iRBH9f7dnmd514kM5ojpOsNK8',
               divInputEmail.value, divInputPassword.value)
    .then(data => saveAdminData(data))
})

function saveAdminData(data) {

    if (data.idToken) {
        window.location = 'admin.html';
        localStorage.setItem('idToken', JSON.stringify(data.idToken));
        localStorage.setItem('email', JSON.stringify(data.email));

        
    }
    else {
         alert('Wrong password or email');
    }        
}
    
/*     localStorage.setItem('idToken', JSON.stringify(data.idToken));
    localStorage.setItem('email', JSON.stringify(data.email)); */



/* admin@gmail.com
qwerty */
