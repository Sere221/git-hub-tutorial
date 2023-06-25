var number = 5;
var number_2 = -3;
var isHappy = false;

var res = number < number_2 ? (number + number_2) : (number - number_2);
console.log(res);

if(number == 5 || isHappy)
{
    console.log("OK");
}
else if(number > 5 && !isHappy)
{
    console.warn('Bruh');
}
else
{
    console.log("Not");
}

var stroka = '+';

switch (stroka)
{
    case '+':
        console.log(number + number_2);
        break;
    case '-':
        console.log(number - number_2);
        break;
    case '/':
        console.log(number * number_2);
        break;
    case '*':
        console.log(number / number_2);
        break;
    default:
        console.log('Oops!');
        break;
}
