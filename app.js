const clock = document.querySelector(".clock");

function hour_min_sec() {
    let time = new Date();
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    clock.innerHTML = h + ' : ' + m + ' : ' + s;

    setInterval(hour_min_sec, 1000)
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
}; // add zero in front of numbers < 10
    return i;
}

hour_min_sec();