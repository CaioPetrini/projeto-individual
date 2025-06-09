var nome = sessionStorage.NOME_USUARIO;

var nomeUsuario = document.getElementById("nome_input");
var nomeUsuario2 = document.getElementById("nome_input2");

nomeUsuario.innerHTML = `${nome}`;
nomeUsuario2.innerHTML = `${nome}`;

function logo_landing_page() {
        window.location.href = '../index.html'
    }