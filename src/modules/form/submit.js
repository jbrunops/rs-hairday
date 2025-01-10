const form = document.querySelector("form");
form.onsubmit = (event) => {
  // previnindo o comportamento padrão do formulário
  event.preventDefault();

  console.log("ENVIADO!");
};
