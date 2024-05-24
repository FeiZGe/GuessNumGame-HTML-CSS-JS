
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) +minNum;

let attemps = 0;
let guess;

let btn = document.getElementById(`enterBTN`);
let output = document.getElementById(`statusText`);

document.getElementById(`minmaxRange`).textContent = `${minNum}-${maxNum}`

btn.addEventListener('click', function(){
    guess = document.getElementById(`GuessNum`).value;

    if (isNaN(guess)){
        document.getElementById(`invaildText`).textContent = 'Invaild number!'
    }
    else if(guess < minNum || guess > maxNum){
        document.getElementById(`invaildText`).textContent = 'Invaild number!'
    }
    else {
        document.getElementById(`invaildText`).textContent = ''
        attemps++;
        if(guess > answer) {
            output.textContent = 'Too HIGH!'
        }
        else if(guess < answer) {
            output.textContent = 'Too LOW!'
        }
        else {
            output.textContent = `Correct!! The Answer is ${answer}. It took you ${attemps} attemps.`
        }
    }
})