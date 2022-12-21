console.log ('JS OK');

const daysCounter = document.getElementById('days');
const hoursCounter = document.getElementById('hours');
const minutesCounter = document.getElementById('minutes');
const secondsCounter = document.getElementById('seconds');

// Recupero la data di Natale 2022
const christmasDate = new Date('2022-12-25');
const mschristmasDate = christmasDate.getTime();


// Unità di misura
const msPerSecond = 1000;
const msPerMinute = msPerSecond * 60 ; 
const msPerHour = msPerMinute * 60;
const msPerDay = msPerHour * 24;


const countdown = () => {

    // Data di oggi
    const now = new Date();
    const nowMs = now.getTime();

    // Quanti millisecondi mancano al Natale?
    const msLeft = mschristmasDate - nowMs;


    const daysToXmas = msLeft / msPerDay;
    const hoursToXmas = (msLeft % msPerDay) / msPerHour;
    const minutesToXmas = (msLeft % msPerHour) / msPerMinute;
    const secondsToXmas = (msLeft % msPerMinute) /msPerSecond;


    // Stampiamo in pagina
    daysCounter.innerText = Math.floor(daysToXmas);
    hoursCounter.innerText = Math.floor(hoursToXmas);
    minutesCounter.innetText = Math.floor(minutesToXmas);
    secondsCounter.innerText = Math.floor(secondsToXmas);
}


countdown();
setInterval(countdown, msPerSecond);








