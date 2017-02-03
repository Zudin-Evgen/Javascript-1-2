var n, p;
n = +checkIfEmpty(checkIfString(prompt('Введите число, которое нужно возвести в степень:').replace(/\s/g,'')));
p = +checkIfEmpty(checkIfString(prompt('Введите степень числа:').replace(/\s/g,'')));
inPow(n, p);


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

function checkIfEmpty(value) {
  while (value === "") {
    value = checkIfString(prompt('Вы ввели пустое значение!Введите любую цифру...').replace(/\s/g,''));
  }
  return value;
}

function checkIfString(value) {
  while (isNaN(value)) {
    value = +checkIfEmpty(prompt('Вы ввели в значении БУКВУ(ы)!А нужны - цифры').replace(/\s/g,''));
  }
  return value;
}
