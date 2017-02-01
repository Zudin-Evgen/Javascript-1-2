<<<<<<< HEAD
// Задание №1:

=======
>>>>>>> 204f0841c08d5727834a5823e63f21d604ed5d89
function inPow(num, pow) {
  if(pow === 0) {
    return console.log('Любое число в нулевой степени равняется единице');
  }
  var start = num;
  for(pow; pow !== 1; pow--) {
    num*=start;
  }
  console.log(num);
}

var n = +prompt('Введите число, которое нужно возвести в степень:');
var p = +prompt('Введите степень числа:');

inPow(n, p);
