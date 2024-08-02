import React, { useContext } from 'react';
import { ContadorContext } from '../ContadorContext/ContadorContext';

const CounterApp = () => {
    const { contador, incrementarContador, decrementarContador } = useContext(ContadorContext);

    return (
        <div>
            <span className="cart-count text-decoration-none"><strong>{contador}</strong></span>
        </div>
    );
};

export default CounterApp;