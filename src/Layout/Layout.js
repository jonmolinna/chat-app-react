import React from 'react';
import { Outlet } from 'react-router-dom';

// Outlet -> va a aceptar mas rutas

const Layout = () => {
    return (
        <main>
            <Outlet />
        </main>
    )
};

export default Layout;