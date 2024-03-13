import { useRef } from "react";
import { useAppDispatch } from "../store/store";
import { addPerson } from "../store/slices/personSlice";

const Add = () => {
  const name = useRef<string>("");
  const dispatch = useAppDispatch();

  const handlePerson = () => {
    dispatch(addPerson({ name: name.current }))
  };

  return (
    <div>
      <label htmlFor="">Person name: </label>
      <input type="text" onChange={(e) => (name.current = e.target.value)} />
      <button onClick={handlePerson}>Add</button>
    </div>
  );
};

export default Add;
