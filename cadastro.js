import { supabase } from "./supabase.js";

const form = document.getElementById("formCadastro");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: senha
  });

  if (error) {
    alert("Erro no cadastro: " + error.message);
  } else {
    alert("Cadastro realizado com sucesso!");
  }
});
