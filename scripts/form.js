console.log('its working')

function submitBday() {
    let Q4A = 0;
    let Bdate = document.getElementById('bday').value;
    let Bday = +new Date(Bdate);
    Q4A += ~~ ((Date.now() - Bday) / (31557600000));
    let theBday = document.getElementById('resultBday');
    if(Q4A == 432){
        theBday.innerHTML = `Wery funny mr. MacLeod :)`;
    }
    else if(Q4A < 18 && Q4A > 0){
        theBday.innerHTML = `${Q4A} is too young, please come back when you turn 18!`;
    }
    else if(Q4A <= 0 || Q4A >= 80){
        theBday.innerHTML = `Please enter valid date of birth`;
    }
    else if(Q4A >= 18){
        theBday.innerHTML = `${Q4A} is great age too start looking for true love!`;
    }
}

//431
//1592