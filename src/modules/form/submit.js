import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

// Demorei bastante para encontrar entender que estava falantando isso. Por isso não estava enviando as informações!
const clientName = document.getElementById("client");

// Data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual e define a data mínima como sendo a data atual.
selectedDate.value = inputToday;
selectedDate.min = inputToday;

// Carrega a data atual
selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD");

// Definir a data mínima como sendo a data atual
selectedDate.min = dayjs(new Date()).format("YYYY-MM-DD");

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente!");
    }

    // Recuperar o horário selecionado
    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Selecione a hora.");
    }

    // Recupera somente a hora
    const [hour] = hourSelected.innerText.split(":");

    const when = dayjs(selectedDate.value).add(hour, "hour");

    // Gera um ID
    const id = new Date().getTime();

    await scheduleNew({
      id,
      name,
      when,
    });
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
    console.log(error);
  }
};
