import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../services/firebase';

function ItemListContainer() {
    const { id } = useParams();
    const [filteredBreeds, setFilteredBreeds] = useState([]);

    useEffect(() => {
        const fetchBreeds = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "breeds"));
                const breeds = querySnapshot.docs.map(doc => doc.data());

                const filtered = breeds.filter(breed => {
                    if (breed.weight) {

                        // Filtra por peso
                        const weight = breed.weight;

                        if (id === "pequeños") {
                            return weight <= 15;
                        } else if (id === "medianos") {
                            return weight > 15 && weight <= 35;
                        } else if (id === "grandes") {
                            return weight > 35;
                        } else {
                            return true; 
                        }
                    } else {
                        return false;
                    }
                });

                setFilteredBreeds(filtered);
            } catch (error) {
                console.error('Error fetching breeds:', error);
            }
        };

        fetchBreeds();
    }, [id]);

    return (
        <div>
            <h1 className="d-flex flex-row justify-content-center text-center m-5">CATÁLOGO DE NUESTROS EJEMPLARES</h1>
            <ItemList breeds={filteredBreeds} /> 
        </div>
    );
}

export default ItemListContainer;