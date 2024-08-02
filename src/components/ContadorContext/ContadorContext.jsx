import React, { createContext, useState, useEffect } from 'react';

export const ContadorContext = createContext();

export const ContadorProvider = ({ children }) => {
    const [contador, setContador] = useState(0);
    const [stocks, setStocks] = useState({});
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Al cargar la página, reinicia el contador y stocks
        const resetStocks = Object.keys(localStorage)
            .filter(key => key.startsWith('item_'))
            .reduce((acc, key) => {
                const item = JSON.parse(localStorage.getItem(key));
                acc[item.breedId] = (acc[item.breedId] || 3) + 1;
                return acc;
            }, {});

        setStocks(resetStocks);
        setContador(Object.keys(localStorage).length); 

        
        localStorage.clear();
    }, []);

    useEffect(() => {
        localStorage.setItem('stocks', JSON.stringify(stocks));
    }, [stocks]);

    const incrementarContador = () => {
        setContador(prev => prev + 1);
    };

    const decrementarContador = () => {
        setContador(prev => Math.max(prev - 1, 0));
    };

    const actualizarStock = (id, cantidad) => {
        setStocks(prevStocks => ({
            ...prevStocks,
            [id]: Math.max((prevStocks[id] ?? 3) + cantidad, 0)
        }));
    };

    const agregarItem = (item) => {
        setItems(prevItems => {
            const updatedItems = [...prevItems, item];
            localStorage.setItem(`item_${item.id}`, JSON.stringify(item));
            incrementarContador();
            return updatedItems;
        });
    };

    const eliminarItem = (itemId, breedId) => {
        setItems(prevItems => {
            const updatedItems = prevItems.filter(item => item.id !== itemId);
            localStorage.removeItem(`item_${itemId}`);
            decrementarContador();
            actualizarStock(breedId, 1);
            return updatedItems;
        });
    };

    return (
        <ContadorContext.Provider value={{
            contador,
            setContador, 
            incrementarContador,
            decrementarContador,
            stocks,
            actualizarStock,
            agregarItem,
            eliminarItem
        }}>
            {children}
        </ContadorContext.Provider>
    );
};
