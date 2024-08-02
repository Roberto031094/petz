import React from 'react';
import PropsPeso from '../PropsPeso/PropsPeso';
import StockManager from '../StockManager/StockManager';
import { Link } from 'react-router-dom';

const ItemList = ({ breeds }) => {
    if (breeds.length === 0) {
        return <p className="m-3"><strong>Cargando...</strong></p>;
    }

    return (
        <div>
            <ul className="list-unstyled product-grid">
                {breeds.map(breed => (
                    <li key={breed.id} className="product">
                        <img src={breed.image} alt={breed.name} style={{ width: '250px', height: "250px" }} className="card-img-top imagen_producto" />
                        <h5 className="card-title">{breed.name}</h5>
                        <PropsPeso peso={breed.weight} />
                        <Link to={`/item/${breed.id}`} state={{ breed }}>
                            <button className='boton'>
                                <p className='boton_adquirir'>Detalles</p>
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
