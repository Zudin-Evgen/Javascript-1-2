//Начало программы:
var user;
alert('Введите 5 имен по очереди:');
for(var names = [], i = 0; i < 5; enterNames());
user = isValid(prompt('Введите имя пользователя:'));
compareNames(user);

function isValid(value) {
  while(value === null || value.replace(/(^\s+|\s+$)/g,'') === "") {
    if (value === null) value = prompt('Вы ввели NULL. Введите другое значение:');
    else if (value.replace(/(^\s+|\s+$)/g,'') === "") {
    value = prompt('Вы ввели пустую строку. Введите другое значение:');
    }
  }
  return value.replace(/(^\s+|\s+$)/g,'');
}

//Функция ввода имен в массив
function enterNames() {
  i++;
  names.push(isValid(prompt('Введите имя №' + i)));
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
