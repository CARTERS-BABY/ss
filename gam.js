var j1 = localStorage.getItem('j1') 
var j2 = localStorage.getItem('j2') 
var pontosj1 = 0
var pontosj2 = 0
document.getElementById('namej1').innerHTML = j1
document.getElementById('namej2').innerHTML = j2
document.getElementById('pontoj1').innerHTML = pontosj1
document.getElementById('pontoj2').innerHTML = pontosj2
function enviar(){
var pegar = document.getElementById ('palavra').value
var palavra = pegar.toLowerCase()

var letra1 = palavra.charAt(1)

var letra2 = palavra.charAt(Math.floor(palavra.length/2))
console.log (letra2)
var letra3 = palavra.charAt(palavra.length-1)
console.log (letra3)
exibir= palavra.replace(letra1,'_')
exibir= exibir.replace(letra2,'_')
exibir= exibir.replace(letra3,'_')
console.log(palavra)
var saida = document.getElementById('aotput')
var pergunta = `<h4>Palavra: ${exibir}</h4>`
var input = '<input type="text" id="resposta">'
var button = '<button class="btn btn-info" onclick="checar()"> Checar </button>'
saida.innerHTML = pergunta+input+button
document.getElementById('palavra').value= ''
}
document.getElementById('pj').innerHTML='faça sua pergunta:' + j1
document.getElementById('rj').innerHTML='faça sua resposta:' + j2
var pergunta = j1 
var responde = j2 
function checar (){
    var pegarresposta = document.getElementById ('resposta').value
var resposta = pegarresposta.toLowerCase()
if(resposta == palavra){
    if(responde == j1 ){
        pontosj1 = pontosj1 + 1 
        document.getElementById('pontoj1').innerHTML = pontosj1
    }
    else{
        pontosj2 = pontosj2 + 1 
        document.getElementById('pontoj2').innerHTML = pontosj2



    }
}
if (pergunta == j1 ){
    pergunta = j2 
    document.getElementById('pj').innerHTML='faça sua pergunta:' + j2
}
else{

   
    pergunta = j1
    document.getElementById('pj').innerHTML='faça sua pergunta:' + j1
}
if(responde == j1 ) {
responde = j2 
document.getElementById('rj').innerHTML='faça sua pergunta:' + j2
}
else{
    responde = j1 
    document.getElementById('rj').innerHTML='faça sua pergunta:' + j1

}
document.getElementById('aotput').innerHTML = ''
}

