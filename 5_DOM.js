/***DOM
conve rt HTML TO DOM-Created by browser
-'document' object***/

//const para= document.querySelector('p');//grabs the first p tag
//const para= document.querySelector('.error'); 
//const para= document.querySelector('div.error');

//to get selector for an element ispect it and from ekements right click >copy>copy selector
//const para= document.querySelector('body > div.error');
//console.log(para);

const paras = document.querySelectorAll('p');
//const paras = document.querySelectorAll('.error');
console.log(paras);
console.log(paras[3]);
paras.forEach(para =>{
    console.log(para);
});

//get an element by ID
// const title= getElementById('page-title');
// console.log(title);

//get elements by their class name
const errors=document.getElementsByClassName('error');
//const errors=document.getElementsByClassName['error']; //returns an array
console.log(errors);
//we can,t use forEach method here because its an HTML colllection

//CHANGING INNER HTML
const content = document.querySelector('.content');
//console.log(content.innerHTML); //getting a property
//setting a property
// content.innerHTML= '<h2>THIS IS NEW UPDATED H2</h2>'
//to APPEND INSTEAD
// content.innerHTML+= '<h2>THIS IS NEW UPDATED H2</h2>'

//adding data from an array and updating it in the html
const people=['jasmine','vedangi','avanti'];

people.forEach(person => {
    content.innerHTML +=`<ul>${person}</ul>`;
});




//get elements by their tag name
const link= document.querySelector();
//(li a)=heirarchical selector therefore it is space seperated (li.item)
//querySelectorAll
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.amazon.com');
link.innerText ='SHOP NOW!!'
//we can also set attributes for attributes which doesn't exists yet
link.setAttribute('style','color:green');
//This completely overwrites previous styles:
link.setAttribute('style','margin:50px');

//to solve this we do:
const title =document.querySelector('h1');
console.log(title.style);
console.log(title.style.color);
title.style.margin='50px';
title.style.color='crimson';
/*in javascript all the css properties that has a hyphen like font-size, dont use it like that instead use it as fontSize i.e in Camel case*/
title.style.fontSize='50px';
title.style.fontSize =''; //deleting the previously added font size



/*
//changing class for a p tag
const msg = document.querySelector('p');
console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'success');*/



/*
const content = querySelector('p');
//to get all the classes an element has
console.log(content.clasList);
//add a class
content.classList.add('error');
//to remove a class
content.classList.remove('error');
*/

// classList.add
// .remove
// .toggle

/*.innerHTML; //<em>Hello</em> 
.textContent; //Hello */





//if a lot of code to be executed on the browser the website slow = onstead use backend batabase

//eventListeners
