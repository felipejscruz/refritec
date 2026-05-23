const form =
document.getElementById("loginForm");

form.addEventListener("submit", async (e)=>{

  e.preventDefault();

  const cpf =
  document.getElementById("cpfLogin").value;

  const senha =
  document.getElementById("senhaLogin").value;

  const url =
  "SUA_URL_APPS_SCRIPT"
  + "?acao=login"
  + "&cpf=" + cpf
  + "&senha=" + senha;

  try{

    const resposta =
    await fetch(url);

    const resultado =
    await resposta.json();

    console.log(resultado);

    if(resultado.status == "sucesso"){

      localStorage.setItem(
        "usuario",
        JSON.stringify(resultado.usuario)
      );

      alert("Login realizado!");

      window.location.href =
      "painel.html";

    }

    else{

      alert("CPF ou senha inválidos");

    }

  }

  catch(erro){

    console.log(erro);

    alert("Erro ao conectar");

  }

});