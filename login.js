import { supabase } from "./supabase.js";

const form = document.getElementById("formLogin");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: senha
  });

  if (error) {
    alert("Erro no login: " + error.message);
  } else {
    alert("Login realizado com sucesso!");
    window.location.href = "index.html";
  }
});
