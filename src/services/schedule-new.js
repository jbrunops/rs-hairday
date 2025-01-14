import { apiConfig } from "./api-config.js";
export async function scheduleNew({ id, nome, when }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/jason",
      },
      body: JSON.stringify({ id, name, when }),
    });

    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Não foi possível agendar, tente novamente!");
  }
}
