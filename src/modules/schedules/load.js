import {} from "../../services/s"
import { hoursLouad } from "../form/hours-louad.js";

// Seleciona o input de data
const selectedDate = document.getElementById("date");
export function schedulesDay() {
  // Obter data do input
  const date = selectedDate.value;

  // Buscar na API os agendamentos

  // Renderiza as horas disponíveis
  hoursLouad({ date });
}
