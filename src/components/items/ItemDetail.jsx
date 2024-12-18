function ItemDetail({ id, nombre, descripcion, precio, imagen }) {
  return (
      <div className="card">
          <img src={imagen} className="card-img-top" alt={nombre} />
          <div className="card-body">
              <h5 className="card-title">{nombre}</h5>
              <p>{descripcion}</p>
              <p>${precio}</p>
              <button className="btn btn-success">Agregar al carrito</button>
          </div>
      </div>
  );
}

export default ItemDetail;
