import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="seccion_header d-flex flex-column justify-content-center align-items-center">
      <Link to={`/`}>
        <img src="https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_pets_48px-256.png" alt="" className="logo"/>
      </Link>
      <p><strong>PETZ | TU TIENDA DE MASCOTAS ONLINE</strong></p>
    </div>
  );
}

export default Header;