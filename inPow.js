var n, p;
n = +isValid(prompt('Введите число, которое нужно возвести в степень:'));
p = +isValid(prompt('Введите степень числа:'));
inPow(n, p);


function isValid(value) {
  while (value === null || value.replace(/\s/g,'') === "" || isNaN(value)) {
    if(value === null) value = prompt('Вы ввели NULL. Введите другое значение:');
    else if (value.replace(/\s/g, '') === "") {
      value = prompt('Вы ввели пустую строку. Введите другое значение:');
    }
    else if (isNaN(value)) value = prompt('Вы ввели буквы в значении. Введите только цифры');
  }
  return value.replace(/\s/g,'');
}

function inPow(num, pow) {
  var start = num;
  if(pow === 0) {
    return console.log('Любое число в нулевой степени равняется единице');
  }
  if(pow < 0) {
    pow*=-1;
    return console.log(1/multiplyNumber(num, start, pow));
  }
  return console.log(multiplyNumber(num, start, pow));
}

function multiplyNumber(num, start, pow) {
  for(pow; pow !== 1; pow--) {
    num*=start;
  }
  return num;
}
