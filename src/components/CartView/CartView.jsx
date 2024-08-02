import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContadorContext } from '../ContadorContext/ContadorContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartView = () => {
    const { eliminarItem } = useContext(ContadorContext);
    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const storedItems = Object.keys(localStorage)
            .filter(key => key.startsWith('item_'))
            .map(key => JSON.parse(localStorage.getItem(key)));
        setItems(storedItems);

        const total = storedItems.reduce((acc, item) => acc + parseFloat(item.price), 0);
        setTotalPrice(total);
    }, [eliminarItem]);

    const handleRemoveItem = (itemId, breedId) => {
        eliminarItem(itemId, breedId);
        setItems(prevItems => {
            const updatedItems = prevItems.filter(item => item.id !== itemId);
            const total = updatedItems.reduce((acc, item) => acc + parseFloat(item.price), 0);
            setTotalPrice(total);
            return updatedItems;
        });
        toast.error("Se ha quitado el ejemplar del carrito");
        console.log(`Datos del animal eliminados del localStorage: ${itemId}`);
    };

    const handleBackToCatalog = () => {
        navigate('/');
    };

    const handleCheckout = () => {
        navigate('/checkout', { state: { items, totalPrice } });
    };

    return (
        <div>
            <h1 className="d-flex flex-row justify-content-center text-center m-5">CARRITO DE COMPRAS</h1>
            {items.length === 0 ? (
                <div className="d-flex justify-content-center">
                    <p className='m-5'>No hay ítems en el carrito.</p>
                </div>
            ) : (
                <>
                    <ul className='d-flex flex-row flex-wrap justify-content-center list-unstyled'>
                        {items.map(item => (
                            <li key={item.id} className='m-5' style={{ border: "2px solid black", borderRadius: '20px', backgroundColor: "rgb(240, 240, 240)" }}>
                                <div className='d-flex flex-column align-items-center m-3'>
                                    <h3>{item.name}</h3>
                                    {item.image && item.image ? (
                                        <img src={item.image} alt={item.name} style={{ width: '150px', height: '150px', borderRadius: '20px', border: "2px solid black" }} className='m-4' />
                                    ) : (
                                        <p>No image available</p>
                                    )}
                                    <p><strong>Precio:</strong> ${item.price}</p>
                                    <button className='boton' onClick={() => handleRemoveItem(item.id, item.breedId)}>
                                        <p className='boton_adquirir'>Eliminar</p>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="d-flex justify-content-center m-5">
                        <h2>Total: ${totalPrice.toFixed(3)}</h2>
                    </div>
                </>
            )}
            <div className="d-flex justify-content-center m-5">
                <button onClick={handleBackToCatalog} className='boton'>
                    <p className='boton_adquirir'>Ir al Catálogo</p>
                </button>
                <button onClick={handleCheckout} className='boton'>
                    <p className='boton_adquirir'>Ir a Checkout</p>
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CartView;

