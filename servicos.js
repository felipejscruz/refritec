function agendar(){

  const usuario =
  localStorage.getItem("usuario");

  if(usuario){

    window.location.href =
    "agendamento.html";

  }

  else{

    window.location.href =
    "login.html";

  }

}
