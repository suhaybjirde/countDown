countDown()
function countDown() {
    const days = document.querySelector('#days');

    const hoursDigit1 = document.querySelector('#hoursFirstDigit');
    const hoursDigit2 = document.querySelector('#hoursSecondDigit');


    const minutesDigit1 = document.querySelector('#minutesFirstDigit');
    const minutesDigit2 = document.querySelector('#minutesSecondDigit');


    const secondsDigit1 = document.querySelector('#secondsFirstDigit');
    const secondsDigit2= document.getElementById('secondsSecondDigit')

    // const dateNow = new Date();

    const dateNow = new Date();
    // console.log()
    // console.log()
    // console.log()
    // console.log(dateNow.getHours())
    // console.log(dateNow.getMinutes())
    // console.log(dateNow.getSeconds())
    let launchDate = new Date(dateNow.getFullYear(),dateNow.getMonth(),dateNow.getDate() + 8, 1, 1, 1);


    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let day = hours * 24;


    let gap = launchDate.getTime() - dateNow.getTime();

    let dayLeft = Math.floor(gap / day);
    let hoursLeft = Math.floor((gap % day) / hours)
    let minutesLeft = Math.floor((gap % hours) / minutes)
    let secondsLeft = Math.floor((gap % minutes) / seconds)

    // if (hoursLeft < 10) {
    //     hoursEl.textContent  = `0${hoursLeft}`;
    // } else {
    //     hoursEl.textContent = hoursLeft;
    // }
    // if (dayLeft < 10) {
    //     daysEl.textContent  = `0${dayLeft}`;
    // } else {
    //     daysEl.textContent = dayLeft;
    // }
    // seconds

    changeInnerHtml(secondsLeft, secondsDigit1, secondsDigit2)

    // minutes
    let minutesStr = minutesLeft.toString()
    if (minutesLeft < 10) {
        minutesStr = `0${minutesLeft}`;
    } else {
        if (secondsLeft == 59) changeInnerHtml(minutesLeft, minutesDigit1,minutesDigit2)
    }
    minutesDigit1.textContent = minutesStr[0]
    minutesDigit2.textContent = minutesStr[1]
    

    // hours
    let hoursStr = hoursLeft.toString()
    if (hoursLeft < 10) {
        hoursStr = `0${minutesLeft}`;
    } else {
        if (minutesLeft == 59 && secondsLeft == 59) changeInnerHtml(hoursLeft, hoursDigit1,hoursDigit2)
    }
    hoursDigit1.textContent = hoursStr[0]
    hoursDigit2.textContent = hoursStr[1]

    //days
    days.textContent = dayLeft
    
}
function changeInnerHtml(timeLeft, digitOne, digitTwo) {
    let str = timeLeft.toString();
    if (timeLeft < 10) str = `0${timeLeft}`;
    digitOne.textContent = str[0]
    digitTwo.textContent = str[1]; 
    if (timeLeft % 10 == 0 || (digitOne.innerText == '0' && digitTwo.innerText == '0')) {
        digitOne.classList = 'show'
        setTimeout(()=> {
            digitOne.className = ''
        }, 500)
    }
    digitTwo.classList.add('show');
    setTimeout(()=> {
        digitTwo.className = ''
    }, 500)
}

setInterval(countDown, 1000);