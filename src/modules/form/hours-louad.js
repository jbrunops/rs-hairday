import dayjs from "dayjs";
import { opneningHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";
const hours = document.getElementById("hours");

export function hoursLouad({ date, dailySchedules }) {
  // Limpar lista de horários
  hours.innerHTML = "";

  // DANDO ERRO 1
  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm")
  );

  const opening = opneningHours.map((hour) => {
    //Recuperar a hora
    const [scheduleHour] = hour.split(":");

    // adicionar a hora na data e verificar se está no passado.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    // DANDO ERRO 2 - resolvido, estava || e era &&
    const available = !unavailableHours.includes(hour) && !isHourPast;

    return {
      hour,
      available,
    };
  });

  // renderizar os horários
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");

    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unabailable");

    li.textContent = hour;

    if (hour === "9:00") {
      hourHeaderAdd("Manhã");
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde");
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite");
    }

    hours.append(li);
  });

  // Adicionando o evento de clique nos horários disponíveis
  hoursClick();
}

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;

  hours.append(header);
}
