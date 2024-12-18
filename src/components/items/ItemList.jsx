
import PropTypes from 'prop-types';
import Item from "./item";

function ItemList({ items }) {
    if (items.length === 0) {
        return <p className="text-center mt-4">No hay productos disponibles.</p>;
    }
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {items.map(item => (
                <div className="col" key={item.id}>
                    <Item {...item} />
                </div>
            ))}
        </div>
    );
}

ItemList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            nombre: PropTypes.string.isRequired,
            precio: PropTypes.number.isRequired,
            imagen: PropTypes.string.isRequired,
        })
    ).isRequired,
};
export default ItemList;

