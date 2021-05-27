const eventDate = new Date("15 August 2021").getTime();
function timer(){
    const td = new Date();
    const timeLeft = eventDate - td;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}
timer();
setInterval(timer,1000);