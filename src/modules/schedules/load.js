import { hoursLouad } from "../form/hours-louad.js";

// Seleciona o input de data
const selectedDate = document.getElementById("date");
export function schedulesDay() {
  // Obter data do input
  const date = selectedDate.value;

  // Renderiza as horas disponíveis
  hoursLouad({ date });
}
