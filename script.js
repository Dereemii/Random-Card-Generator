const numberCard = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const cardSuit = ['&spades;', '&clubs;', '&hearts;', '&diams;'];

function randomSelection() {

    let randomNumber = numberCard[Math.floor(Math.random()*numberCard.length)]; // para generar numero aleatorio
    let randomCardsuit = cardSuit[Math.floor(Math.random()*cardSuit.length)]; // para generar pinta aleatoria

    document.getElementById("topCard").innerHTML = randomCardsuit; 
    document.getElementById("bottomCard").innerHTML = randomCardsuit;
    document.getElementById("number").innerHTML = randomNumber; // para imprimir numero aleatorio

    // generar condicion para que cuando salga corazon o diamante, cambie la pinta a color rojo

    if(randomCardsuit === "&hearts;" || randomCardsuit === "&diams;"){
        topCard.style.color = 'red';
        bottomCard.style.color = 'red';
    }

    else{
        topCard.style.color = 'black'
        bottomCard.style.color = 'black'
    }
}

document.querySelector(".btn").addEventListener("click", randomSelection)
