// Mais um erro aqui: eu tinha colocado ../../ sendo que a pasta estava antes.
import { scheduleFetchByDay } from "../services/schedule-fetch-by-day.js";
import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when }) {
  try {
    // Faz requisição para enviar os dados agendados
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        // ERRO DE DIGITAÇÃO NO jason
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    });
    // Exibe mensagem
    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Não foi possível agendar, tente novamente!");
  }
}
