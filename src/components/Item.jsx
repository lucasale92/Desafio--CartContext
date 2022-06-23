import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <>
      <div className="col">
        <div className="card mx-1">
          <Link to={"/item/" + producto.id}>
            <img src={producto.img}
              className="card-img-top shop-img"
              alt="producto"
            />
          </Link>
          <div className="card-body">
            <h5 className="card-title mb-3">{producto.name}</h5>
            <p className="card-text mb-1">
              <b>Precio: $</b> {producto.price}
            </p>
            <p className="card-text mb-1">
              <b>Stock:</b> {producto.stock}
            </p>
            <p className="card-text mb-1">
              <b>Descripcion:</b> {producto.details}
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
};
export default Item;
