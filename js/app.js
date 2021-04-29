'use strict'

let userName = prompt('Hello could you please write your name ?')

alert(' welcome to my website ' + userName);


alert('Answer The Questions By yes or no just !!');


let score = 0;
let userAnswer = prompt('Do You know Me ?')

switch (userAnswer.toLowerCase()) {
    case 'yes':
        alert('thanks for knowing me')
        score++;
        break;

    case 'no':
        alert('im sultan elayan')
        break;

}



let userAnswer1 = prompt('Do You know My Age ?')

switch (userAnswer1.toLowerCase()) {
    case 'yes':
        alert('so now you know my age')
        score++;
        break;

    case 'no':
        alert('im 29')
        break;

}



alert('now you can type your answer ')


let userAnswer5;

for (let i = 0; i < 4; i++) {
    userAnswer5 = prompt('Guess What Is My Height ?');
    if (userAnswer5 > 172) {
        alert('too high');
    }

    else if (userAnswer5 < 172) {
        alert('too low');

    }
    if (userAnswer5 == 172) {
        alert('correct');
        score++;
        break;
    }
}


function drink() {
    let favDrink = ['cola', 'vemto', 'abu saleh', 'coffee'];

    for (let j = 0; j < 6; j++) {

        let userAnswer6 = prompt('guess what is my favourite drink ?');

        for (let i = 0; i <= favDrink.length; i++) {
            if (userAnswer6 == favDrink[i]) {

                alert('wow thats correct');
                score++;
                j = 10;
                break;

            } else {
                alert('try another drink');
                break;



            }
        }
    }
}
drink();

alert('all my favourite drink was' + ' ' + 'cola' + ' ' + 'vemto' + ' ' + 'abu saleh' + ' ' + 'coffee');
alert('bravo ' + userName + ' you have end the quizz your score is ' + score);
