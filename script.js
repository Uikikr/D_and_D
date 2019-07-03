function attribute() {
    const pointEls = document.getElementsByClassName('att_score');
    for (i = 0; i < pointEls.length; i++) {
        pointEls[i].innerHTML = (Math.floor(Math.random() * 19 - 3) + 3);
    };
    if (pointEls.value > 10) {
        document.getElementsByClassName('modifier').innerHTML = '5'
    } else {
        document.getElementsByClassName('modifier').innerHTML= '-5'
    };
}
