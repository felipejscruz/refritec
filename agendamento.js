const usuario =
JSON.parse(localStorage.getItem("usuario"));

if(!usuario){

  window.location.href =
  "login.html";

}

const form =
document.getElementById("agendamentoForm");

form.addEventListener("submit", async (e)=>{

  e.preventDefault();

  const dados = {

    tipo:"agendamento",

    cpf:usuario.cpf,

    nome:usuario.nome,

    servico:
    document.getElementById("servico").value,

    observacoes:
    document.getElementById("observacoes").value

  };

  const url =
  "SUA_URL_APPS_SCRIPT";

  await fetch(url,{

    method:"POST",

    mode:"no-cors",

    headers:{
      "Content-Type":"application/json"
    },

    body:JSON.stringify(dados)

  });

  alert("Agendamento realizado!");

  window.location.href =
  "painel.html";

});
