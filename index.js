//Teste 1
/*const ages = [32,33,12,40]

function checkAge(age){
  return age > document.getElementById("ageToCheck").value;
}

function myFunction(){
  document.getElementById("demo").innerHTML = ages.filter(checkAge);
}
*/

//Teste 2
/*const numeros = [5, 10, 15, 20];

const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log("Array original:", numeros);
console.log("Soma dos números:", soma)
*/

//Atividade 1
/*const numeros = [50, 45, 67, 89, 10, 5]

const numeroDobro = numeros.map(numero => numero * 2);

console.log(`Sua sequência original é: ${numeros}`)
console.log(`Sua sequência dobrada é: ${numeroDobro}`)
*/

//Atividade 2

/*const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const numerosPares = numeros.filter(numero => numero % 2 == 0)

console.log(`Sua sequência original é: ${numeros}`);
console.log(`Os números pares da sequência são: ${numerosPares}`)
*/

//Atividade 3

/*const numeros = [1, 2, 3, 4, 5, 6]

const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(`Sua sequência original é: ${numeros}`);
console.log(`A soma dos itens da sua sequência é: ${soma}`)
*/

//Atividade 4

/*const numeros = [1, 2, 3, 4, 5, 6]

const numeroQuadrado = numeros.map(numero => numero ** 2);

console.log(`Sua sequência original é: ${numeros}`)
console.log(`Sua sequência ao quadrado é: ${numeroQuadrado}`)
*/

//Atividade 5

/*const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

const letrasMaiusculas = letras.map(elemento=> elemento.toUpperCase())

console.log(`Sua sequência de letras é ${letrasMaiusculas}`)
*/

//Atividade 6

const nomes = ['Sandra', 'Ana', 'Thiago', 'Maria', 'Bruno', 'Gustavo', 'Clarice', 'Carlos']

const nomesCaracteres = nomes.filter(nome => nome.length > 5)

console.log(`Sua sequência original de nomes é: ${nomes}`)
console.log(`Aqui estão os nomes com mais de 5 letras: ${nomesCaracteres}`)