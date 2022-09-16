// var card1 = document.querySelector('.card');

// card1.onclick = function() {
//     card1.src = "./assets/cards-back.jpg";
// };

let card1 = document.querySelector('#card1');

card1.addEventListener('click', function() {
    card1.src = "./assets/python.jpg";
});


let card2 = document.querySelector('#card2');

card2.addEventListener('click', function() {
    card2.src = "./assets/sql.jpg";
});


let card3 = document.querySelector('#card3');

card3.addEventListener('click', function() {
    card3.src = "./assets/php.jpg";
});


let card4 = document.querySelector('#card4');

card4.addEventListener('click', function() {
    card4.src = "./assets/php.jpg";
});


let card5 = document.querySelector('#card5');

card5.addEventListener('click', function() {
    card5.src = "./assets/python.jpg";
});


let card6 = document.querySelector('#card6');

card6.addEventListener('click', function() {
    card6.src = "./assets/sql.jpg";
});


const reset = document.querySelector('#reset');

reset.addEventListener('click', function(reset) {
    const cards =document.querySelectorAll('card');
    cards.forEach((item, index)=> {
        card.src = "./assets/cards-back.jpg"
    })
});