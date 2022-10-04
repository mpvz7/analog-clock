const deg = 6;
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const setClock = () => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hour.style.transform = `rotateZ(${hh+mm/12}deg)`;
    minute.style.transform = `rotateZ(${mm}deg)`;
    second.style.transform = `rotateZ(${ss}deg)`;
}  

setClock;
setInterval(setClock, 1000);