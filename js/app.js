'use strict'

let userName = prompt('Hello could you please write your name ?')
console.log(userName)

alert(' welcome to my website ' +  userName);


alert('Answer The Questions By yes or no just !!');

// frist question

let userAnswer = prompt('Do You know Me ?' ) 

switch (userAnswer.toLowerCase()) {
    case 'yes':
         console.log('thanks for knowing me ');
break;

    case 'no' :
         console.log('im sultan elayan');
    break;

    default :console.log ('you must answer with yes or no ');
   
}

// second question

let userAnswer1 = prompt('Do You know My Age ?' ) 

switch (userAnswer1.toLowerCase()) {
    case 'yes':
         console.log('so now you know my age ');
break;

    case 'no' :
         console.log('im 29');
    break;

    default :console.log ('you must answer with yes or no ');
}

// thrid question

let userAnswer2 = prompt('Do You Love To Work with Me ?' ) 

switch (userAnswer2.toLowerCase()) {
    case 'yes':
         console.log('thanks a lot ');
break;

    case 'no' :
         console.log('we must work together');
    break;

    default :console.log ('you must answer with yes or no ');
}

// forth question

let userAnswer3 = prompt('Do You know My Friend Name ?' ) 

switch (userAnswer3.toLowerCase()) {
    case 'yes':
         console.log('very good ');
break;

    case 'no' :
         console.log('its qusai alqasi');
    break;

    default :console.log ('you must answer with yes or no ');
}

// fifth question

let userAnswer4 = prompt('Do You Love Me ?' ) 

switch (userAnswer4.toLowerCase()) {
    case 'yes':
         console.log('I Love You Too ');
break;

    case 'no' :
         console.log('you are the looser');
    break;

    default :console.log ('you must answer with yes or no ');
}
