import { supabase } from "./supabase.js";
console.log("cadastro.js carregado com sucesso 🚀");
const form = document.getElementById("cadastroForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const dataNascimento = document.getElementById("dataNascimento").value;
  const endereco = document.getElementById("endereco").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const { data: authData, error: authError } =
    await supabase.auth.signUp({
      email,
      password: senha
    });

  if (authError || !authData.user) {
    alert(authError?.message || "Erro no cadastro");
    return;
  }

  const { error } = await supabase
    .from("usuarios")
    .insert({
      id: authData.user.id,
      nome,
      cpf,
      data_nascimento: dataNascimento,
      endereco,
      telefone,
      email
    });

  if (error) {
    alert(error.message);
  } else {
    alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html";
  }
});
