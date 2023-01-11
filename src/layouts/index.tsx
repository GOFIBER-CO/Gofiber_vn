import React from 'react'
import Footer from './Footer';
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
            <Footer />
        </>
    )
}

export default Layout