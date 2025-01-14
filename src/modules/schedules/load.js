import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLouad } from "../form/hours-louad.js";
import { schedulesShow } from "../schedules/show.js";

// Seleciona o input de data
const selectedDate = document.getElementById("date");
export async function schedulesDay() {
  // Obter data do input
  const date = selectedDate.value;

  // Buscar na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date });

  // Exibir os agendamentos
  schedulesShow({ dailySchedules });

  // Renderiza as horas disponíveis

  // MAIS UM ERRO RESOLVIDO, ERA PRA TER ADD dailySchedules
  hoursLouad({ date, dailySchedules });
}
