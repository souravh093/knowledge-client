import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header';
import Footer from '../Pages/Shared/Footer';

const Root = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;