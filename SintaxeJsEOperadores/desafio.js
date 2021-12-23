function comparaNumeros(num1, num2) {
  if (!num1 || !num2) return "Informe dois numeros diferentes de zero";

  const primeiraFrase = criaPrimeiraFrase(num1, num2);
  const segundaFrase = criaSegundaFrase(num1, num2);

  return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
  let iguais = "";

  if (num1 !== num2) iguais = "não";

  return `Os números ${num1} e ${num2} ${iguais} são iguais`;
}

function criaSegundaFrase(num1, num2) {
  const soma = num1 + num2;
  const compara10 = soma > 10;
  const compara20 = soma < 20;

  let resultado10 = "menor";
  let resultado20 = "maior";

  if (compara10) resultado10 = "maior";
  if (compara20) resultado20 = "menor";

  return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${compara20} que 20`;
}

console.log(comparaNumeros(1, 2));
