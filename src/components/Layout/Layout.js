import { Outlet, Link } from "react-router-dom";
import { Suspense } from "react";
import React from 'react';
import css from './Layout.module.css'

const Layout = () => {


    return (
        <div className={css.container}>
            <header>
                <nav
                style={{
                    display: 'flex',
                    margin: '15px',
                    gap: '15px'
                }}>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                </nav>
            </header>

            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </div>)

}

export default Layout;