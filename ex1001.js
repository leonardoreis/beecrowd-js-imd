var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

[A, B] = input.split("\n");

var X = `X = ${(Number(A) + Number(B))}`;
console.log(X);

/*
As linhas acima (4 à 7) resolveram com sucesso o BEECROWD.
A partir de agora, será feita a versão WEB, usando FUNÇÃO.
*/

function Somar(){
    const a = Number(document.getElementById("A").value);
    const b = Number(document.getElementById("B").value);
    const x = (a + b);
    document.getElementById("Resultado").innerHTML = `X = ${x}`;
}

function Limpar(){
    document.getElementById("Resultado").innerHTML = "";
}