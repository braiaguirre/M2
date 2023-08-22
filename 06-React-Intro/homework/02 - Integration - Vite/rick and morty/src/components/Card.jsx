export default function Card(props) {
   const {name, status, species, origin, gender, image, onClose} = props;
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>Nombre: {name}.</h2>
         <h2>Status: {status}.</h2>
         <h2>Especie: {species}.</h2>
         <h2>Género: {gender}.</h2>
         <h2>Origen: {origin}.</h2>
         <img src={image} alt='imagen' />
      </div>
   );
}
