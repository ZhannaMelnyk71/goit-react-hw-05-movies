import { Outlet, Link, NavLink  } from "react-router-dom";
import { Suspense } from "react";
// import styled from '"styled-components';
import React from 'react';

// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: orange;
//   }
// `;

const Layout = () => {


    return (
        <div
            style={{
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 20,
                color: '#010101',
                padding: 20,
            }}>
            <nav
                style={{
                    display: 'flex',
                    margin: '15px',
                    gap: '15px'
                }}>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
            </nav>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </div>)

}

export default Layout;