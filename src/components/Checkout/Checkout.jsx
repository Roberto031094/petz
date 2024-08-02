import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../services/firebase'; 
import Swal from 'sweetalert2';
import { ContadorContext } from '../ContadorContext/ContadorContext'; 

const Checkout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { items = [], totalPrice = 0 } = location.state || {};
    const { setContador, actualizarStock } = useContext(ContadorContext); 

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        direccion: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleBackToCartView = () => {
        navigate('/cart');
    };

    const getCurrentDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); 
        const yyyy = today.getFullYear();
        return `${dd}/${mm}/${yyyy}`;
    };

    const handleSendOrder = async () => {
        try {
            
            await addDoc(collection(db, "order"), {
                ...formData,
                items,
                totalPrice: totalPrice.toFixed(3),
                date: getCurrentDate()
            });

            
            items.forEach(item => {
                localStorage.removeItem(`item_${item.id}`);
                actualizarStock(item.breedId, 1); 
            });

            setContador(0); 

            Swal.fire({
                title: 'Orden enviada exitosamente',
                icon: 'success',
                confirmButtonText: 'OK'
            });

            navigate('/'); 
        } catch (error) {
            console.error("Error al enviar la orden: ", error);
            Swal.fire({
                title: 'Error al enviar la orden',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <div>
            <h1 className="d-flex flex-row justify-content-center text-center m-5">CHECKOUT</h1>
            <div className="d-flex flex-column align-items-center m-5">
                <form className="w-50">
                    <div className="form-group mb-3">
                        <label htmlFor="nombre">Nombre:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="nombre" 
                            name="nombre" 
                            value={formData.nombre} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="apellido">Apellido:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="apellido" 
                            name="apellido" 
                            value={formData.apellido} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="telefono">Número de Teléfono:</label>
                        <input 
                            type="tel" 
                            className="form-control" 
                            id="telefono" 
                            name="telefono" 
                            value={formData.telefono} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="direccion">Dirección:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="direccion" 
                            name="direccion" 
                            value={formData.direccion} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                </form>
            </div>
            <div className="d-flex flex-column align-items-center m-5">
                <h2>Items en el carrito:</h2>
                <ul className='list-unstyled'>
                    {items.map(item => (
                        <li key={item.id} className='mb-3' style={{ border: "1px solid black", padding: '10px', borderRadius: '10px', backgroundColor: "rgb(240, 240, 240)" }}>
                            <p><strong>{item.name}</strong> - ${item.price}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="d-flex justify-content-center m-5">
                <h2>Total: ${totalPrice.toFixed(3)}</h2>
            </div>
            <div className="d-flex justify-content-center m-5">
                <h3>Fecha: {getCurrentDate()}</h3>
            </div>
            <div className="d-flex justify-content-center m-5">
                <button onClick={handleSendOrder} className='boton'>
                    <p className='boton_adquirir'>Enviar Orden</p>
                </button>
            </div>
            <div className="d-flex justify-content-center m-5">
                <button onClick={handleBackToCartView} className='boton'>
                    <p className='boton_adquirir'>Volver al Carrito</p>
                </button>
            </div>
        </div>
    );
};

export default Checkout;



