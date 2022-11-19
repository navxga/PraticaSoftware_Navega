let nome = document.getElementsByName("form_nome");
let sobrenome = document.getElementsByName("form_sobrenome");
let email = document.getElementsByName("form_email");
let mostrar = document.getElementById("mostrar")


function mostrar () {
    mostrar.InnerHTML += `<div>
    O nome é: ${nome} 
    O Sobrenome é: ${sobrenome} 
    O email é: ${email} 
    </div>`
}