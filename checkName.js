// Задание №2:

function enterNames() {
  i++;
  names.push(prompt('Введите иммя №' + i));
}

function compareNames(){
  user = prompt('Введите имя пользователя:');
  for(var name in names) {
    if (user == names[name]) {
      alert(user + ', вы успешно вошли в систему!');
      return true;
    }
    i++;
  }
  alert('Ошибка!Такого пользователя в базе данных - не существует!');
  return false;
}


//Начало программы:
alert('Введите 5 имен по очереди:');
for(var names = [], i = 0; i < 5; enterNames());
for(var user, i = 0; compareNames() === undefined; compareNames());
