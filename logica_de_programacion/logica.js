var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var numeros = [];

rl.question("Ingresa el primer número: ", function(n1) {
  rl.question("Ingresa el segundo número: ", function(n2) {
    rl.question("Ingresa el tercer número: ", function(n3) {

      var num1 = parseFloat(n1);
      var num2 = parseFloat(n2);
      var num3 = parseFloat(n3);

      if (num1 === num2 && num2 === num3) {
        console.log("Los tres números son iguales: " + num1);
      } else {
        var numeros = [num1, num2, num3];

        for (var i = 0; i < numeros.length; i++) {
          for (var j = i + 1; j < numeros.length; j++) {
            if (numeros[i] < numeros[j]) {
              var temp = numeros[i];
              numeros[i] = numeros[j];
              numeros[j] = temp;
            }
          }
        }

        console.log("De mayor a menor: " + numeros[0] + ", " + numeros[1] + ", " + numeros[2]);
        console.log("De menor a mayor: " + numeros[2] + ", " + numeros[1] + ", " + numeros[0]);
      }

      rl.close();
    });
  });
});