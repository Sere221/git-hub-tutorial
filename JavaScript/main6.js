for(var i = 0; i < 10; i++)
{
    if(i == 2)
        continue;
    else if(i == 9)
        break;
    console.log(i);
}

var j = 10;
while (j > 1)
{
    console.log(j);
    j--;    
}

var x = 1;
do
{
    console.log(x);
    x *= 2;
}
while(x < 20);

var arr = [5, 7, 3, 8, 9, 91];

for(var i = 0; i < arr.length; i++) {
  arr[i] *= 2;

  console.log("Элемент " + (i + 1) + ": " + arr[i]);
}