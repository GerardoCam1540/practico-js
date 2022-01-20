//Codigo del Cuadrado
console.group('Cuadrados')

function perimetroCuadrado(lado)
{
    return  lado * 4;
}

function areaCuadrado (lado)
{
return lado * lado;
}


console.groupEnd('Cuadrados');
//Codigo del Triangulo

console.group('Triangulos')



function perimetroTriangulo (lado1, lado2, base)
{
   return lado1 + lado2 + base
}


function areaTriangulo (base,altura) 
{
    return (base * altura) / 2
}


console.groupEnd();

//Codigo del Circulo

console.group('Circulos');


//Diametro
function diametroCirculo(radio)
{
    return radio *2
} 

//PI
const PI = Math.PI;


//Circunferencia

function perimetroCirculo(radio)
{
   const diametro = diametroCirculo(radio)
   return diametro * PI;
}



//Area

function areaCirculo(radio)
{
    return (radio * radio) * PI;
}

console.groupEnd();


//HTML

function calcularPerimetroCuadrado(){

    const input = document.getElementById('InputCuadrado');
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

function calcularAreaCuadrado()
{
    const input = document.getElementById('InputCuadrado');
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo()
{
    const input1 = document.getElementById('InputTrianguloLado1')
    const input2 = document.getElementById('InputTrianguloLado2')
    const input3 = document.getElementById('InputTrianguloBase')
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo()
{
    const input1 = document.getElementById('InputTrianguloBase01');
    const input2 = document.getElementById('InputAlturaTriangulo')
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);

    const area = areaTriangulo(value1,value2)
    alert(area);
}

function calcularDiametroCirculo()
{
    const input = document.getElementById('InputCirculo')
    const value = input.value

    const diametro = diametroCirculo(value)
    alert(diametro);
}

function calcularPerimetroCirculo()
{
    const input = document.getElementById('InputCirculo')
    const value = input.value

    const diametro = perimetroCirculo(value)
    alert(diametro);
}

function calcularAreaCirculo()
{
    const input = document.getElementById('InputCirculo')
    const value = input.value

    const diametro = areaCirculo(value)
    alert(diametro);
}



//Ejercicio Isosceles

function alturaIsosceles(lado1,lado2, base)
{
    if(lado1 === lado2 && lado1,lado2 != base)
    {
        var calculo = (lado1 * lado2) - ((base * base) /4) 
        return Math.sqrt(calculo)

        
    }else
    {
        console.log('No es un Triangulo Isosceles')
    }
}