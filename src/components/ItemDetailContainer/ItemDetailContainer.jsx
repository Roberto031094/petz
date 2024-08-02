import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../services/firebase';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [breed, setBreed] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBreed = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "breeds"));
                const breeds = querySnapshot.docs.map(doc => doc.data());

                const foundBreed = breeds.find(b => b.id === parseInt(id));
                setBreed(foundBreed);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching breed:', error);
                setLoading(false);
            }
        };

        fetchBreed();
    }, [id]);

    if (loading) {
        return <div className="m-3"><strong>Cargando...</strong></div>;
    }

    if (!breed) {
        return <div>Error: No se encontró detalles de raza para la ID: {id}.</div>;
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center mt-4'>
            <ItemDetail breed={breed} />
            <Link to={`/`}>
                <button className='boton mt-4'>
                    <p className='boton_adquirir'>Regresar al catálogo</p>
                </button>
            </Link>
        </div>
    );
};

export default ItemDetailContainer;
