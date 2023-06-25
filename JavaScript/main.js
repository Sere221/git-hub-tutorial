document.getElementById('main-form').addEventListener("submit", checkForm);

function checkForm(event) {
  event.preventDefault();
    //event.stopPropagation();
  var el = document.getElementById('main-form');

  var title = el.title.value;
  var anons = el.anons.value;
  var state = el.state.value;

  var fail = "";

  if(title == "" || anons == "" || state == "")
    fail = "Заполните все поля";
  else if(title.length <= 1 || title.length > 90)
    fail = "Введите корректное заголовок";
  else if(anons.length <= 1)
    fail = "Введите корректное анонс";

  if(fail != "")
    document.getElementById('error').innerHTML = fail;
  else {
    alert("Все данные корректно заполнены");
    document.getElementById("main-form").innerHTML = "<h2>" + title + "</h2><p>" + anons + "</p>";
  }
}