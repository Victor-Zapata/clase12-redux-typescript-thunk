import Add from "./components/Add";
import List from "./components/List";
import Peliculas from "./components/Peliculas";

function App() {

  return (
    <div className="flex justify-center flex-col items-center">
      <Add />
      <List />
      <hr />
      <h2>Últimos Estrenos</h2>
      <Peliculas />
    </div>
  );
}

export default App;
