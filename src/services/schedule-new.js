import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when }) {
  try {
    // Faz requisição para enviar os dados agendados
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/jason",
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
