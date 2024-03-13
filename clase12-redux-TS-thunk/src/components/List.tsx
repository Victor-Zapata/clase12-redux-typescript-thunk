import { useAppSelector } from "../store/store";

const List = () => {
  const persons = useAppSelector((state) => state.person.persons);
  return (
    <div className="rounded-md shadow border m-2 p-2">
      <p>This is List Components</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
