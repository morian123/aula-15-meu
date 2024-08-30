const limpar = document.getElementById('limpar');
const maisOuMenos = document.getElementById('maisOuMenos');
const porcentagem = document.getElementById('porcentagem');
const divisao  = document.getElementById('divisao');
const sete = document.getElementById('sete');
const oito = document.getElementById('oito');
const nove = document.getElementById('nove');
const multiplicacao = document.getElementById('multiplicacao');
const quatro = document.getElementById('quatro');
const cinco = document.getElementById('cinco');
const seis = document.getElementById('seis');
const subtracao = document.getElementById('subtracao');
const um = document.getElementById('um');
const dois = document.getElementById('dois');
const tres = document.getElementById('tres');
const adicao = document.getElementById('adicao');
const ponto = document.getElementById('ponto');
const zero = document.getElementById('zero');
const deletar = document.getElementById('deletar');
const calcular = document.getElementById('calcular');

let listaConta = [];
let resultado = document.getElementById('resultado')
function mostrarNaTela() {
    resultado.innerHTML = listaConta.join("")
}
deletar.addEventListener("click", () => {
    listaConta.pop()
    mostrarNaTela()
})

limpar.addEventListener("click", () => {
    listaConta = []
    mostrarNaTela()
})

porcentagem.addEventListener("click", () => {
    console.log("/100")
    listaConta.push("/100")
    mostrarNaTela()
})

divisao.addEventListener("click", () => {
    console.log("/")
    listaConta.push("/")
    console.log(listaConta)
    mostrarNaTela()
})

sete.addEventListener("click", () => {
    console.log("7")
    listaConta.push("7")
    console.log(listaConta)
    mostrarNaTela()
})

oito.addEventListener("click", () => {
    console.log("8")
    listaConta.push("8")
    console.log(listaConta)
    mostrarNaTela()
})

nove.addEventListener("click", () => {
    console.log("9")
    listaConta.push("9")
    console.log(listaConta)
    mostrarNaTela()
})

multiplicacao.addEventListener("click", () => {
    console.log("*")
    listaConta.push('*')
    mostrarNaTela()
})

quatro.addEventListener("click", () => {
    console.log("4")
    listaConta.push("4")
    console.log(listaConta)
    mostrarNaTela()
})

cinco.addEventListener("click", () => {
    console.log("5")
    listaConta.push("5")
    console.log(listaConta)
    mostrarNaTela()
})

seis.addEventListener("click", () => {
    console.log("6")
    listaConta.push("6")
    console.log(listaConta)
    mostrarNaTela()
})

subtracao.addEventListener("click", () => {
    console.log('-')
    listaConta.push("-")
    mostrarNaTela()
})

um.addEventListener("click", () => {
    console.log("1")
    listaConta.push("1")
    console.log(listaConta)
    mostrarNaTela()
})

dois.addEventListener("click", () => {
    console.log("2")
    listaConta.push("2")
    console.log(listaConta)
    mostrarNaTela()
})

tres.addEventListener("click", () => {
    console.log("3")
    listaConta.push("3")
    console.log(listaConta)
    mostrarNaTela()
})

adicao.addEventListener("click", () => {
    console.log("+")
    listaConta.push("+")
    mostrarNaTela()
})

ponto.addEventListener("click", () => {
    console.log(".")
    listaConta.push(".")
    mostrarNaTela()
})

zero.addEventListener("click", () => {
    console.log("0")
    listaConta.push("0")
    console.log(listaConta)
    mostrarNaTela()
})

deletar.addEventListener("click", () => {
    listaConta.pop()
    mostrarNaTela()
})

calcular.addEventListener("click", () => {
    let resultado = eval(listaConta.join(""))
    resultado = parseFloat(resultado.toFixed(2))
    listaConta = [resultado]
    mostrarNaTela()
})

maisOuMenos.addEventListener("click", () =>{
    encontrou: for (let i = listaConta.length; i >= 0; i--) {
        if (listaConta[i] == "+") {
            listaConta.splice(i, 1, "-");
            break encontrou;
        }
        if (listaConta[i] == "-") {
            listaConta.splice(i, 1, "+");
            break encontrou;
        }
        if (listaConta[i] == "*" || listaConta[i] == "/") {
            listaConta.splice(i + 1, 0, "-");
            break encontrou;
        }
        if (i == 0) {
            listaConta.unshift("+");
        }
    }
    mostrarNaTela()
})