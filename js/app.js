'use strict'

let userName = prompt('Hello could you please write your name ?')
console.log(userName)

alert(' welcome to my website ' + userName);


alert('Answer The Questions By yes or no just !!');

// frist question
let score = 0;
let userAnswer = prompt('Do You know Me ?')

switch (userAnswer.toLowerCase()) {
    case 'yes':
        console.log('thanks for knowing me ');
        alert('thanks for knowing me')
        score++;
        break;

    case 'no':
        console.log('im sultan elayan');
        alert('im sultan elayan')
        break;

    default: console.log('you must answer with yes or no ');

}

// second question

let userAnswer1 = prompt('Do You know My Age ?')

switch (userAnswer1.toLowerCase()) {
    case 'yes':
        console.log('so now you know my age ');
        alert('so now you know my age')
        score++;
        break;

    case 'no':
        console.log('im 29');
        alert('im 29')
        break;

    default: console.log('you must answer with yes or no ');
}

// thrid question

let userAnswer2 = prompt('Do You Love To Work with Me ?')

switch (userAnswer2.toLowerCase()) {
    case 'yes':
        console.log('thanks a lot ');
        alert('thanks a lot')
        score++;
        break;

    case 'no':
        console.log('we must work together');
        alert('we must work together')
        break;

    default: console.log('you must answer with yes or no ');
}

// forth question

let userAnswer3 = prompt('Do You know My Friend Name ?')

switch (userAnswer3.toLowerCase()) {
    case 'yes':
        console.log('very good ');
        alert('very good')
        score++;
        break;

    case 'no':
        console.log('its qusai alqasi');
        alert('its qusai alqasi')
        break;

    default: console.log('you must answer with yes or no ');
}



alert('now you can type your answer ')

//fifth question
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
    console.log(userAnswer5)
}

//sixth question

// let favDrink = ['cola', 'vemto', 'abu saleh', 'coffee'];
// let userAnswer6;
// for (let i = 0; i < 6; i++) {
//     userAnswer6 = prompt('guess what is my favourite drink ?');
//     if (favDrink[0] == userAnswer6) {
//         alert('wow thats correct');
//         score++;
//         break;
//     } else if (favDrink[1] == userAnswer6) {
//         alert('wow thats correct');
//         score++;
//         break;
//     } else if (favDrink[2] == userAnswer6) {
//         alert('wow thats correct');
//         score++;
//         break;
//     }
//     else if (favDrink[3] == userAnswer6) {
//         alert('wow thats correct');
//         score++;
//         break;
//     }
//     alert('try another drink')
// }



// i modefiy the Q6 to work by loops 
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
console.log(score);
