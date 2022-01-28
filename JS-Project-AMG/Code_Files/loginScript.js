// URL
const queryString = window.location.search;
 const urlParams = new URLSearchParams(queryString);
 //USER NAME
 let user_name = urlParams.get('user_name');
 let email =urlParams.get('email');
 let txt_username = document.getElementById('txt-username');
 let p = document.createElement('p');
p.innerHTML= "Hello , " + user_name;
txt_username.appendChild(p);