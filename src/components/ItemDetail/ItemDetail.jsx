import React from 'react';
import PropsPeso from '../PropsPeso/PropsPeso';
import StockManager from '../StockManager/StockManager';

const ItemDetail = ({ breed }) => {
    return (
        <section className="d-flex flex-row justify-content-center text-center" style={{ border: "2px solid black", borderRadius: '20px', backgroundColor: "rgb(240, 240, 240)" }}>
            <div className="m-5">
                <img src={breed.image} alt={breed.name} style={{ width: '300px', height: "300px", borderRadius: '20px', border: "2px solid black" }} />
            </div >
            <div className="m-5 d-flex flex-column justify-content-center align-items-center">
                <h2>"{breed.name}"</h2>
                <p></p>
                <p><strong>ID:</strong> {breed.id}</p>
                <p><strong>Peso:</strong> {breed.weight} kg</p>
                <p><strong>Altura:</strong> {breed.height} cm</p>
                <PropsPeso peso={breed.weight} />
                <StockManager breedId={breed.id} initialStock={1} breed={breed} />
            </div>
        </section>
    );
};

export default ItemDetail;

