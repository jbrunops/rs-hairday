import dayjs from "dayjs";
import { opneningHours } from "../../utils/opening-hours.js";

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
}
