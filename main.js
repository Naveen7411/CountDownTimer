const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secEl = document.getElementById('seconds');



function countdown() {

    const demodate = document.getElementById('Date').value;
    const alertmsg = document.getElementById('msg');
    if (demodate != "") {

        const date_vari = new Date(demodate);
        const newYearDate = new Date(date_vari);
        const currentDate = new Date();
        const totalSeconds = (newYearDate - currentDate) / 1000;



        if (currentDate < newYearDate) {
            alertmsg.innerHTML = '';
            const days = Math.floor(totalSeconds / 3600 / 24);
            const hours = Math.floor((totalSeconds / 3600) % 24);
            const mins = Math.floor((totalSeconds / 60) % 60);
            const sec = Math.floor(totalSeconds) % 60;

            daysEl.innerHTML = days;
            hoursEl.innerHTML = addZero(hours);
            minsEl.innerHTML = addZero(mins);
            secEl.innerHTML = addZero(sec);


        } else {



            daysEl.innerHTML = 0;
            hoursEl.innerHTML = 0;
            minsEl.innerHTML = 0;
            secEl.innerHTML = 0;
            alertmsg.innerHTML = "Please Enter the Future date :(";


        }
    } else { alertmsg.innerHTML = "Please Enter The Date :("; }
}



function addZero(time) {
    return time < 10 ? `0${time}` : time;

}

countdown();

setInterval(countdown, 1000);