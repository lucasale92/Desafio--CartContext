import React, { useState } from "react";

const ItemCount = ({ stock, inicial, onAdd }) => {
  const [qty, setQty] = useState(inicial);

  const sumar = () => {
    qty < stock && setQty(qty + 1) 
  };
  const restar = () => {
    qty > inicial
      ? setQty(qty - 1)
      : alert("No se pueden quitar más productos");
  };
  const reset = () => {
    setQty(inicial);
  };
  return (
    <div>
      <h3>{qty}</h3>
      <button onClick={sumar} className="botonUno">
        +
      </button>
      <button onClick={restar} className="botonDos">
        -
      </button>
      <button onClick={reset} className="botonTres">
        Reset
      </button>
      <button
        onClick={() => {
          onAdd(qty);
          reset();
        }}
        className="botonCuatro"
      >
        Agregar al carrito
      </button>
    </div>
  );
};
export default ItemCount;
