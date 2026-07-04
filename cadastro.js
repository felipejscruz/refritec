import { supabase } from "./supabase.js";

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
      password: senha,
      options: {
        data: {
          nome,
          cpf,
          data_nascimento: dataNascimento,
          endereco,
          telefone
        }
      }
    });

  if (authError || !authData.user) {
    alert(authError?.message || "Erro no cadastro");
    return;
  }

  alert("Cadastro realizado com sucesso! Verifique seu e-mail para confirmar a conta.");
  window.location.href = "login.html";
});
