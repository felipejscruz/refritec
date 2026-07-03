import { supabase } from "./supabase.js";

const form = document.getElementById("formCadastro");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const dataNascimento = document.getElementById("dataNascimento").value;
  const endereco = document.getElementById("endereco").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  // 1️⃣ cria usuário (Auth)
  const { data: authData, error: authError } =
    await supabase.auth.signUp({
      email: email,
      password: senha
    });

  if (authError) {
    alert(authError.message);
    return;
  }

  // 2️⃣ salva dados extras
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
    alert("Erro ao salvar dados");
  } else {
    alert("Cadastro realizado com sucesso!");
  }
});
