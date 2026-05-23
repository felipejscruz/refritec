document
.getElementById("loginForm")
.addEventListener("submit", function(e){

  e.preventDefault();

  const cpf =
  document.getElementById("cpfLogin").value;

  const senha =
  document.getElementById("senhaLogin").value;

  console.log(cpf, senha);

  alert("Login realizado!");

});
