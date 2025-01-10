import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

// Carrega a data atual
selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD");

// Definir a data mínima como sendo a data atual
selectedDate.min = dayjs(new Date()).format("YYYY-MM-DD");

form.onsubmit = (event) => {
  // previnindo o comportamento padrão do formulário
  event.preventDefault();

  console.log("ENVIADO!");
};
