import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbaar from '../Navbaar';

const Root = () => {
    return (
        <div>
            <Navbaar/>
           <Outlet/>
        </div>
    );
};

export default Root;