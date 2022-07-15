// Numeri da generare
const numberQ = 5;
let points = 0;

// Array numeri pc e numeri utente
const arrNumb = randNumberGen(numberQ, 1, 100);
console.log(`Array numeri PC = ${arrNumb}`);


const user_numbers = usrArrNumb();
console.log(`Array numeri utente inseriti = ${user_numbers}`);


// Generazione contenitore numeri
let htmlEl = document.getElementById('numberContainer');
for (let i = 0; i < arrNumb.length; i++) {
    htmlEl.innerHTML += `<li class="list">${arrNumb[i]}</li>`;
}
// Timeout per nascondere numeri pc
// let primoTO = setTimeout(newStep, 30000);
let secondoT0 = setTimeout(hid, 5000);

// TimeOut inserimento numeri 
let primoTO = setTimeout(usrArrNumb, 5200);



let sub = document.querySelector('button');
sub.addEventListner('click', function () {
    alert('bottone cliccato')
    for (let i = 0; i < numberQ; i++) {
        console.log(`${i}`)
        console.log(`${points}`)
        console.log(`${arrNumb}`)
        console.log(`${user_numbers}`)
        if (arrNumb.include(i)) {
            points += 1;
            alert('ao')
        }
    }
});
console.log(points);








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
function usrArrNumb() {
    htmlEl.innerHTML = '';
    const usr_numb = [];
    for (let i = 0; i < 5; i++) {
        //Acquisisco input utente
        let user_input = parseInt(prompt('Inserisci numero:'));
        // Aggiunge numeri ad Array numeri
        usr_numb.push(user_input);
    }
    return usr_numb;
}




// // Funzione trasformazione contenitore numeri in input 
// function newStep() {
//     for (let i = 0; i < arrNumb.length; i++) {
//         let exem = document.querySelector('.list');
//         exem.className = 'd-none';
//         htmlEl.innerHTML += `<input class="userN"></input>`;
//     }
// }


function hid() {
    htmlEl.classList = 'd-none';
    document.getElementById('submit').classList.remove('d-none');
}
