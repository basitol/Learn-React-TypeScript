import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

const PersonList = ({ names }: PersonListProps) => {
  return (
    <div>
      {names.map((name, i) => {
        return <h3 key={i}>Hello {name.first + " " + name.last}</h3>;
      })}
    </div>
  );
};

export default PersonList;
