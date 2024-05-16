let nome = ""
let elemento =document.querySelector('#nome')

while (nome == ""){
    nome = prompt ('Qual seria o seu nome estrangeiro?')
}

if(nome == null){
    elemento.textContent = "seja muito bem-vindo estrangeiro"
}else{
    elemento.textContent = nome
}