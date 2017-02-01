function enterNames() {
  i++;
  arr.push(prompt('Введите иммя №' + i));
}

function compareNames(){
  user = prompt('Введите имя пользователя:');
  for(var name in arr) {
    if (user == arr[name]) {
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
for(var arr = [], i = 0; i < 5; enterNames());
for(var user, i = 0; compareNames() === undefined; compareNames());
