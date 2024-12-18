import PropTypes from 'prop-types'; // Importa PropTypes para la validación
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap (si es necesario)

function CartItem({ id, nombre, cantidad, precio, removeItem }) {
    return (
        <div className="card mb-3">
            <div className="card-body d-flex justify-content-between">
                <span>{nombre} (x{cantidad})</span>
                <span>${precio * cantidad}</span>
                <button className="btn btn-danger" onClick={() => removeItem(id)}>Eliminar</button>
            </div>
        </div>
    );
}

    // Validación de props
CartItem.propTypes = {
    id: PropTypes.string.isRequired, // Asegúrate de que id sea una cadena y es requerido
    nombre: PropTypes.string.isRequired, // Asegúrate de que nombre sea una cadena y es requerido
    cantidad: PropTypes.number.isRequired, // Asegúrate de que cantidad sea un número y es requerido
    precio: PropTypes.number.isRequired, // Asegúrate de que precio sea un número y es requerido
    removeItem: PropTypes.func.isRequired, // Asegúrate de que removeItem sea una función y es requerido
};

export default CartItem;