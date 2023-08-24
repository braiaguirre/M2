import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

export default function Card(props) {
   const navigate = useNavigate();
   const {id, name, status, species, origin, gender, image, onClose} = props;

   function navigateHandler() {
      navigate(`/detail/${id}`);
   }

   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`} >
            <h2>Nombre: {name}.</h2>
         </Link>
         <h2>Status: {status}.</h2>
         <h2>Especie: {species}.</h2>
         <h2>Género: {gender}.</h2>
         <h2>Origen: {origin}.</h2>
         <img src={image} alt='imagen' onClick={navigateHandler} />
      </div>
   );
}
