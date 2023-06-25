//HTML
//<button onclick="onClickButton(this)">:D</button>
//<input oninput="onInput(this)">

function onClickButton(el)
{
    el.innerHTML = ":<";
}

function onInput(el)
{
    if (el.value == 'Краш')
    {
        alert('Треш');
    }
}
