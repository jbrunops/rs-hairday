import dayjs from "dayjs";
import { opneningHours } from "../../utils/opening-hours.js";
const hours = document.getElementById("hours");

export function hoursLouad({ date }) {
  const opening = opneningHours.map((hour) => {
    //Recuperar a hora
    const [scheduleHour] = hour.split(":");

    // adicionar a hora na data e verificar se está no passado.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    return {
      hour,
      available: isHourPast,
    };
  });

  // renderizar os horários
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li");

    li.classList.add("hour");
    li.classList.add(available ? "hour-available" : "hour-unabailable");

    li.textContent = hour;
    hours.append(li);
  });
}
