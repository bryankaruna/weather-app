console.log('client side javascript file is loaded');

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     //parse json to object
//     response.json().then((data) => {
//         console.log(data);
//     });
// });

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#messageOne');
const messageTwo = document.querySelector('#messageTwo');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchResult = search.value;
    
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    fetch('http://localhost:3000/weather?address=' + searchResult).then((response) => {
        response.json().then(data => {
            if(data.error){
                // return console.log(data.error);
                return messageOne.textContent = data.error;
            }
            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast;
            console.log(data.location);
            console.log(data.forecast);
        });
    });

});