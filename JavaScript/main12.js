//Интервал
var id = setInterval(my_sunc, 1000);

var i = 0;
function my_sunc()
{
  i++;
  console.log(i);

  if(i == 5)
    clearInterval(id);
}

//Таймер
setTimeout(my_sunc, 5*1000)

function my_sunc()
{
  alert('Прошло 5 секунд');
}