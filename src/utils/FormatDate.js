export const FormatDate = (dateString) => {
  // Verificar si la fecha está en formato dd-mm-yyyy h:i:s
  const regex = /^(\d{2})-(\d{2})-(\d{4}) (\d{2}):(\d{2}):(\d{2})$/;
  let date;

  if (regex.test(dateString)) {
    // Extraer los valores de día, mes, año, horas, minutos y segundos
    const [, day, month, year, hours, minutes, seconds] =
      dateString.match(regex);
    // Convertir a formato ISO (yyyy-mm-ddTHH:mm:ss) para evitar problemas de interpretación
    date = new Date(`${year}-${month}-${day}T${hours}:${minutes}:${seconds}`);
  } else {
    // Si no está en el formato dd-mm-yyyy h:i:s, intentar crear un objeto Date directamente
    date = new Date(dateString);
  }

  // Opciones de formato para Ciudad de México
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "America/Mexico_City",
    hour12: false, // Formato 24 horas
  };

  return new Intl.DateTimeFormat("es-MX", options).format(date);
};
