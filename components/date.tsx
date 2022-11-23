import { parseISO, format } from "date-fns";
import { FC } from "react";

type DateProps = {
  dateString: string;
};

const Date: FC<DateProps> = (props) => {
  const { dateString } = props;

  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};

export default Date;
