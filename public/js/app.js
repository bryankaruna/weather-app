console.log('client side javascript file is loaded');

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     //parse json to object
//     response.json().then((data) => {
//         console.log(data);
//     });
// });

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const button = document.querySelector('#button');
const messageOne = document.querySelector('#messageOne');
const messageTwo = document.querySelector('#messageTwo');



const process = (e) => {
    e.preventDefault();
    const searchResult = search.value;
    
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    fetch('/weather?address=' + searchResult).then((response) => {
        response.json().then(data => {
            if(data.error){
                // return console.log(data.error);
                return messageOne.textContent = data.error;
            }
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast + ', with ' + data.rain + '% of rain. Temperature: ' + data.temperature + '\xb0C';
            console.log(data.location);
            console.log(data.forecast);
        });
    });
}

weatherForm.addEventListener('submit', process);
button.addEventListener('click', process);