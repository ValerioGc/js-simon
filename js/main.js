// Elementi DOM
const htmlEl = document.getElementById('numberContainer');
const subTitle = document.querySelector('h2');
const subBtn = document.getElementById('btn');
// Dichiaro variabile punteggio
let points = 0;
// Numeri da generare
const numberQ = 5;
// Array numeri pc
const arrNumb = randNumberGen(numberQ, 1, 100);
console.log(`Array numeri PC = ${arrNumb}`);
// Event Listner bottone controllo tra array per Punti
subBtn.addEventListener('click',
    function () {
        if (subBtn.innerHTML == 'Controlla Punteggio') {
            controlPoint();
        }
        else if (subBtn.innerHTML == 'Riavvia Partita') {
            location.reload();
        }
        else if (subBtn.innerHTML == 'Avvia') {
            subBtn.classList.add('d-none')
            subBtn.innerHTML = 'Controlla Punteggio';
            htmlEl.classList.remove('d-none');
        // Avvio timer
            timerX(0, 30);
        // Generazione contenitore numeri
            for (let i = 0; i < arrNumb.length; i++) {
                htmlEl.innerHTML += `<li class="bounce b-standard">${arrNumb[i]}</li>`;
            }
        // Nascondi numeri prima dell'alert
            // let primoTO = setTimeout(newStep, 30000);
            let secondoT0 = setTimeout(hid, 30000);
        // TimeOut inserimento numeri
            let primoTO = setTimeout(usrArrNumb, 32000);
        }
    }
);
/***********************************************
******************  FUNZIONI *******************
***********************************************/
// Funzione timer Gioco
function timerX(min, max) {
    let lastT = document.getElementById('countd');
    let time = max;
    setInterval(function () {
        if (time == min) {
            clearInterval();
        }
        time--;
        lastT.innerHTML = time;
        if (time <= (max / 2)) {
            lastT.style.color = 'red';
        }
    }, 1000);
}
// Generatore numeri unici randomici - restituisce array numeri
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
    for (let i = 0; i < numberQ; i++) {
    //Acquisisco input utente
        let user_input = parseInt(prompt('Inserisci numero:'));
    // Aggiunge numeri ad Array numeri
        usr_numb.push(user_input);
    }
    return usr_numb;
}
//Funzione modifica elementi DOM
function hid() {
    htmlEl.classList = 'd-none';
    document.getElementById('btn').classList.remove('d-none');
    subTitle.innerText = '';
}
// Funzione trasformazione contenitore numeri in input
// function newStep() {
//     for (let i = 0; i < arrNumb.length; i++) {
//         let listN = document.querySelector('ul li');
//         listN.className = 'd-none';
//         htmlEl.innerHTML += `<input class="userN"></input>`;
//     }
// }
// Funzione confronto numeri per punteggio
function controlPoint() {
// Definisco array numeri inseriti dall'utente
    const user_numbers = usrArrNumb();
    console.log(`Array numeri utente inseriti = ${user_numbers}`);
    for (let i = 0; i < numberQ; i++) {
    // Verifica doppione
        if (!arrNumb.includes(user_numbers[i])) {
            points = points;
            console.log(`Numero ${i} NON incluso nell array numeri Utente`);
        } else {
            points += 1;
            console.log(`Numero ${i} incluso nell array numeri PC`);
            console.log(`Punteggio = points`);
        }
    }
    console.log(`Punteggio finale = points`);
    subTitle.classList.add('sc-h2');
    subTitle.innerHTML = `Hai Indovinato <span id="pt" class="bold">${points}</span> Numeri!`;
    subBtn.innerHTML = `Riavvia Partita`;
    if (points == 0) {
        document.getElementById('pt').style.color = 'red';
    } else {
        document.getElementById('pt').style.color = 'green';
    }
}