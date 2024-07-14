// ANALOG CLOCK
let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

//    DIGITAL CLOCK
let hours = document.getElementById('hour');
let minutes = document.getElementById('minute');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

setInterval(() => {
    let date = new Date();

    // Analog
    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * 6;
    let ss = date.getSeconds() * 6;
    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    // Digital
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let am = h >= 12 ? "PM" : "AM"
    // convert 24 hr to 12 hr
    if (h > 12) {
        h = h - 12;
    }
    // add zero before single digit number
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
}, 200);

