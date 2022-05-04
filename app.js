let userName = 'David';
console.log(`Hello, ${userName}, what is your question for the Magic 8 ball?`);

let userQuestion = 'Will I become a Software Engineer';

console.log(`${userQuestion}?\nThank you for the question ${userName} and that is a good and interesting one.`);

const randomNumber = Math.floor(Math.random() * 8);
//console.log(`${randomNumber}`);

let eightBall = '';

switch(randomNumber){
    case 0:
        console.log('It is certain');
        break;
    case 1:
        console.log('It is decidedly so');
        break;
    case 2:
        console.log('Reply hazy try again');
        break;
    case 3:
        console.log('Cannot predict now');
        break;
    case 4:
        console.log('Do not count on it');
        break;
    case 5:
        console.log('My sources say no');
        break;
    case 6:
        console.log('Outlook not so good');
        break;
    case 7:
        console.log('Signs point to yes');
        break;
}

