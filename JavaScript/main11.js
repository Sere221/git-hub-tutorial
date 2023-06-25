document.getElementById('main-form').addEventListener("submit", checkForm);

function checkForm(event) {
  event.preventDefault();
  event.stopPropagation();
  var el = document.getElementById('main-form');

  var name = el.name.value;
  var pass = el.pass.value;
  var repass = el.repass.value;
  var state = el.state.value;

  var fail = "";

  if(name == "" || pass == "" || state == "")
    fail = "Заполните все поля";
  else if(name.length <= 1 || name.length > 50)
    fail = "Введите корректное имя";
  else if(pass != repass)
    fail = "Пароли должны совпадать";
  else if(pass.split("&").length > 1)
    fail = "Некорректный пароль";

  if(fail != "")
    document.getElementById('error').innerHTML = fail;
  else {
    alert("Все данные корректно заполнены");
    window.location = 'https://itproger.com';
  }
}

//HTML
/* 
  <form id="main-form" method="post">
    <label for="name">Имя:</label>
  	<input type="text" name="name" placeholder="Имя" id="name"><br><br>
  	<label for="password">Пароль:</label>
  	<input type="password" name="pass" placeholder="Пароль" id="pass"><br><br>
  	<label for="repass">Проверка пароля:</label>
  	<input type="password" name="repass" placeholder="Проверка пароля" id="repass"><br><br>
  	<span>Пол:</span>
  	<input type="radio" name="state" id="male" value="Мужской">
  	<label for="male">Межской</label>
  	<input type="radio" name="state" id="female" value="Женский">
  	<label for="female">Женский</label><br><br>
    <div id="error" style="color: red"></div>
  	<input type="submit" name="submit" value="Готово">
  </form>
 */