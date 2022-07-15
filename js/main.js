// Numeri da generare
const numberQ = 5;

// Array numeri pc e numeri utente
const arrNumb = randNumberGen(numberQ, 1, 100);
console.log(`Array numeri PC = ${arrNumb}`);

// Generazione contenitore numeri
let htmlEl = document.getElementById('numberContainer');
for (let i = 0; i < arrNumb.length; i++) {
    htmlEl.innerHTML += `<li>${arrNumb[i]}</li>`;
}



const user_numbers = usrArrNumb();
console.log(`Array numeri utente inseriti = ${user_numbers}`);


// // Generatore numeri unici randomici - restituisce array numeri
function randNumberGen(numberQuantity, min, max) {
    const arrayRand = [];
    for (let i = 0; i < numberQuantity; i++) {
        let condition = true;
        let randNumber = Math.floor(Math.random() * (max - min) + min);
        while (condition == true) {
        // Verifica doppione
            if (!arrayRand.includes(randNumber)) {
                arrayRand.push(randNumber);
            } else {
                condition = false;
            }
        }
    }  
    return arrayRand;
}



// Funzione aggiunta numeri ad array numeri utente - restituisce array Numeri inseriti dall'utente
function usrArrNumb () {
    const usr_numb = [];
    for (let i = 0; i < 5; i++) {
    //Acquisisco input utente
        let user_input = parseInt(prompt('Inserisci numero:'));
    // Aggiunge numeri ad Array numeri 
        usr_numb.push(user_input);
    }
    return usr_numb;
}





