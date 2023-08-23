import React from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
// import styledZoo from "./Zoo.module.css";

export default function Zoo() {
  const [zoo, setZoo] = React.useState({
    zooName: '',
    animals: [],
    species: [],
    allAnimals: []
  })

  React.useEffect(() => {
    fetch('http://localhost:3001/zoo')
      .then((res) => res.json())
      .then((data) =>
      setZoo({
         ...zoo,
         animals: data.animals,
         species: data.species,
         allAnimals: data.animals,
      })
   )
   .catch((error) => console.log(error));
  }, [])

  const handleInputChange = (e) => setZoo(e.target.value);
  const handleSpecies = (e) => {};
  const handleAllSpecies = () => {};

  return (
    <div>
      <label>Zoo Name:</label>
      <input type="text" value={zoo.zooName} onChange={handleInputChange} />
      <h1>{zoo.zooName}</h1>
      <Species species={zoo.species} props={(handleSpecies, handleAllSpecies)} />
      {console.log(zoo.animals)}
      <Animals animals={zoo.animals} />
    </div>
  );
}
