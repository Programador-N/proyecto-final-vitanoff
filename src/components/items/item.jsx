import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function Item({ id, nombre, precio, imagen }) {
    const formattedPrice = Number(precio).toFixed(2);
    return (
        <div className="card">
            <img 
                src={imagen} 
                className="card-img-top" 
                alt={nombre} 
                onError={(e) => {e.target.onerror = null; e.target.src = 'path/to/placeholder-image.jpg'}}
            />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">${formattedPrice}</p>
                <Link to={`/item/${id}`} className="btn btn-primary" aria-label={`Ver detalles de ${nombre}`}>
                    Ver Detalle
                </Link>
            </div>
        </div>
    );
}

Item.propTypes = {
    id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    imagen: PropTypes.string.isRequired,
};
export default Item;

