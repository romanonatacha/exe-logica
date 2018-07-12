// Escreva um  programa para ler o número de lados de um polígono regular e a medida do lado (em cm).
// Calcular e imprimir o seguinte:    
// − Se o número de lados for igual a 3 escrever TRIÂNGULO e o valor da área
// − Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área.    
// − Se o número de lados for igual a 5 escrever PENTÁGONO.

var input_lados = 3;
var input_cm = 8;

var triangulo = 3;
var quadrado = 4;
var pentagono = 5;

if (input_lados == triangulo) {
    var altura = (input_cm * Math.sqrt(3)) / 2;
    var area = (input_cm * altura) / 2;
    var poligono = 'triangulo';
}

if (input_lados == quadrado) {
    var area = input_cm * input_cm;
    var poligono = 'quadrado';
}

if (input_lados == pentagono) {
    var poligono = 'pentagono';
}

console.log(poligono, area);