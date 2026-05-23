const form =
document.getElementById("cadastroForm");

form.addEventListener("submit", async (e)=>{

  e.preventDefault();

  const dados = {

    nome:
    document.getElementById("nome").value,

    cpf:
    document.getElementById("cpf").value,

    email:
    document.getElementById("email").value,

    telefone:
    document.getElementById("telefone").value,

    senha:
    document.getElementById("senha").value

  };

  const url =
  "https://script.google.com/macros/s/AKfycbyN3es_E3iqB2eNCI6Sol6G-i54cAricV6dgUR0nGjZiyZ6D0GFyQfaidG2fZUY6G5ixA/exec";

  try{

    await fetch(url,{

      method:"POST",

      mode:"no-cors",

      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify(dados)

    });

    alert("Cadastro realizado com sucesso!");

    window.location.href =
    "login.html";

  }

  catch(erro){

    console.log(erro);

    alert("Erro de conexão");

  }

});
