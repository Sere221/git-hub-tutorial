//Нахождение объектов по id
var text = document.getElementById('text');
text.title = 'New text';
console.log(text.title);
text.style.color = '#CCC';
text.style.backgroundColor = '#111';
text.innerHTML = 'Это <br> прикол!!!';

//Нахождение объектов по тегу
var spans = document.getElementsByTagName('span');
for(var i = 0; i < spans.length; i++)
{
    console.log(spans[i].innerHTML);
}

//Нахождение объектов по классу
var spans = document.getElementsByClassName('b-text');
for(var i = 0; i < spans.length; i++)
{
    console.log(spans[i].innerHTML);
}
