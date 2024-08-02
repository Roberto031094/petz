import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CounterApp from '../CounterApp/CounterApp';

const NavBar = () => {
    const navigate = useNavigate(); 

    const handleCartClick = () => {
        navigate('/cart'); 
    };

    return (
        <nav className="navy sticky-top">
            <ul className="nav-links d-flex flex-row justify-content-center align-items-center list-unstyled m-0 p-0 text-center">
                <li className="m-3" style={{ width: '80px'}}>
                    <Link to="/" className="text-decoration-none">Catálogo</Link>
                </li>
                <li className="mt-3">
                    <p>|</p>
                </li>
                <li className="m-3" style={{ width: '80px'}}>
                    <Link to="/category/pequeños" className="text-decoration-none">Pequeños</Link>
                </li>
                <li className="mt-3">
                    <p>|</p>
                </li>
                <li className="m-3" style={{ width: '80px'}} onClick={handleCartClick}>
                    <img src="https://cdn-icons-png.freepik.com/512/1413/1413908.png" alt="Cart" style={{ width: '34px', height: '34px', cursor: 'pointer' }}/>
                    <CounterApp />
                </li>
                <li className="mt-3">
                    <p>|</p>
                </li>
                <li className="m-3" style={{ width: '80px'}}>
                    <Link to="/category/medianos" className="text-decoration-none">Medianos</Link>
                </li>
                <li className="mt-3">
                    <p>|</p>
                </li>
                <li className="m-3" style={{ width: '80px'}}>
                    <Link to="/category/grandes" className="text-decoration-none">Grandes</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
