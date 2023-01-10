import React from 'react'
import Header from './Header';

type Props = {
    children: JSX.Element;
};

function Layout({ children }: Props) {
    return (
        <>
            <Header />
            <main id='main'>
                {children}
            </main>
        </>
    )
}

export default Layout