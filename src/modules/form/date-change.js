import { schedulesDay } from "../schedules/load";

// Selecitonar o input de data
const selectedDate = document.getElementById("date");

// Lista de horários quando o input mudar
selectedDate.onchange = () => schedulesDay();
