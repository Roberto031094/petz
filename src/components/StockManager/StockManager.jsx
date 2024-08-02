import React, { useContext, useState, useEffect } from 'react';
import { ContadorContext } from '../ContadorContext/ContadorContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StockManager = ({ breedId, breed }) => {
    const { incrementarContador, decrementarContador, stocks, actualizarStock, agregarItem } = useContext(ContadorContext);
    const [stock, setStock] = useState(() => stocks[breedId] ?? 3);

    useEffect(() => {
        const initialStock = stocks[breedId] ?? 3;
        setStock(initialStock);
    }, [stocks, breedId]);

    const obtenerPrecio = (pesoNumerico) => {
        if (pesoNumerico < 5) return "50.000";
        if (pesoNumerico >= 5 && pesoNumerico < 10) return "75.000";
        if (pesoNumerico >= 10 && pesoNumerico < 20) return "100.000";
        if (pesoNumerico >= 20 && pesoNumerico < 30) return "125.000";
        if (pesoNumerico >= 30 && pesoNumerico <= 50) return "150.000";
        return "200.000";
    };

    const generarIdUnico = () => {
        return `${breedId}_${Date.now()}`;
    };

    const handleIncrement = () => {
        if (stock > 0) {
            setStock(stock - 1);
            const pesoNumerico = breed.weight; 
            const precio = obtenerPrecio(pesoNumerico);

            const itemId = generarIdUnico();
            const item = {
                id: itemId,
                breedId: breedId,
                image: breed.image,
                name: breed.name,
                weight: breed.weight,
                height: breed.height,
                price: precio
            };

            agregarItem(item);
            actualizarStock(breedId, -1);
            toast.success("Se ha añadido el ejemplar al carrito");
            console.log(`Datos del animal guardados en localStorage: ${JSON.stringify(item)}`);
        }
    };

    const handleDecrement = () => {
        if (stock < 3) { 
            setStock(stock + 1);
            const keys = Object.keys(localStorage).filter(key => key.startsWith('item_') && key.includes(breedId));
            if (keys.length > 0) {
                const itemKey = keys[0];
                localStorage.removeItem(itemKey);
                decrementarContador();
                actualizarStock(breedId, 1);
                toast.error("Se ha quitado el ejemplar del carrito");
                console.log(`Datos del animal eliminados del localStorage: ${itemKey}`);
            }
        }
    };

    return (
        <div>
            <p><strong>Disponibles:</strong> {Math.max(stock, 0)}</p>
            <button className='boton' onClick={handleDecrement} style={{ width: '100px' }}>
                <p className='boton_adquirir'>Cancelar</p>
            </button>
            <button className='boton' onClick={handleIncrement} style={{ width: '100px' }}>
                <p className='boton_adquirir'>Adquirir</p>
            </button>
            <ToastContainer />
        </div>
    );
};

export default StockManager;

