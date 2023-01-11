import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [list, setList] = useState([
    { id: 1, nom: "fufu" },
    { id: 2, nom: "kwanga" },
    { id: 3, nom: "madesu" },
    { id: 4, nom: "ndunda" }
  ]);

  useEffect(() => {
    const kombo = list;

    setList(kombo);
  });

  // const handleClick = () => {
  //   const compteur = compt + 3;
  //   console.log(compteur);
  //   setCompt(compteur);
  // };
  // const handleClick = () => {
  //   const compteur = compt + 3;
  //   console.log(compteur);
  //   setCompt(compteur);
  // };

  const handDelete = (id) => {
    const ady = [...list];
    const copyList = ady.filter((lists) => lists.id !== id);

    setList(copyList);
  };

  return (
    <div className="card">
      {list.map((lists) => (
        <li key={lists.id} className="liste">
          {lists.nom}
          <button onClick={() => handDelete(lists.id)}>Delete</button>
        </li>
      ))}
    </div>
  );
}
