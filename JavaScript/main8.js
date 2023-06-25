var num = 10;

function info() {
  var num = 20;
  console.log(num);
}

info();

console.log(num);


function summa(arr)
{
    var sum = 0;

    for(var i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }

    return sum;
}
 var arr = [1, 4, 10, 5];
 alert(summa(arr));