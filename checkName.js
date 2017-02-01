// Задание №2:

function enterNames() {
  i++;
  names.push(prompt('Введите имя №' + i));
}

function compareNames(user){
  for(var name in names) {
    if (user == names[name]) {
      return alert(user + ', вы успешно вошли в систему!');
    }
  }
  return alert('Ошибка!Такого пользователя в базе данных - не существует!');
}

//Начало программы:
alert('Введите 5 имен по очереди:');
for(var names = [], i = 0; i < 5; enterNames());
u = prompt('Введите имя пользователя:');
compareNames(u);
