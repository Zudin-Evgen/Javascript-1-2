//Начало программы:
var user;
alert('Введите 5 имен по очереди:');
for(var names = [], i = 0; i < 5; enterNames());
user = checkIfEmpty(prompt('Введите имя пользователя:'));
compareNames(user);

//Функция ввода имен в массив
function enterNames() {
  i++;
  names.push(checkIfEmpty(prompt('Введите имя №' + i)));
}

//Функция сравнения имени юзера с именами в массиве
function compareNames(u){
  for(var name in names) {
    if (u == names[name]) {
      return alert(user + ', вы успешно вошли в систему!');
    }
  }
  return alert('Ошибка!Такого пользователя в базе данных - не существует!');
}

//Функция проверки на пустую строку.
function checkIfEmpty(value) {
  while (value === "") {
    value = prompt('Вы ввели пустую строку!Введите больше 1 символа!');
  }
  return value;
}
