import DateObject from "react-date-object";

export const getDate = (): string =>
  new DateObject().format("DD.MM.YYYY HH:mm");
