import { supabase } from "./supabase.js";

const form = document.getElementById("formLogin");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password: senha
  });

  if (error || !data.session) {
    alert(error?.message || "Erro no login");
    return;
  }

  alert("Login realizado com sucesso!");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 300);
});
