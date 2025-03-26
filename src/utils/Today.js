const today = new Date();
export const formattedDate = new Intl.DateTimeFormat("es-MX", {
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(today);
