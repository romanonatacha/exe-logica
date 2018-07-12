/* Tendo como entrada a     altura     e     o     sexo     (codificado     da     seguinte     forma:    
    1:feminino          2:masculino)     de     uma     pessoa,     construa     um     programa     que    
    calcule    e    imprima    seu    peso    ideal,    utilizando    as    seguintes    
    Fórmulas:    
    - para    2 homens:    (72.7    *    Altura)    – 58    
    - para    1 mulheres:    (62.1    *    Altura)    – 44.7 */

    var input_altura = 1.57;
    var input_sexo = 1;

    var calculo_base = (coeficiente_a, altura, coeficiente_b) => (coeficiente_a * altura) - coeficiente_b;

    var coeficientes = [
        [62.1, 44.7],
        [72.7, 58]
    ];

    var pesoIdeal = calculo_base(coeficientes[input_sexo - 1][0], input_altura, coeficientes[input_sexo - 1][1]);
 
    console.log(pesoIdeal);