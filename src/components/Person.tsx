import { PersonProps } from "./Person.types";

const Person = ({ name: { first, last } }: PersonProps) => {
  return (
    <div>
      <h1>Hello {first + " " + last}</h1>
    </div>
  );
};

export default Person;
