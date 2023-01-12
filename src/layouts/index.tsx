import { on } from 'events';
import React, { useState } from 'react'
import DrawerMenu from './DrawerMenu';
import Footer from './Footer';
import Header from './Header';

type Props = {
    children: JSX.Element;
};

function Layout({ children }: Props) {
    const [drawer, setDrawer] = useState<boolean>(false);

    const onShowDrawer = () => {
        setDrawer(true);
    }

    const onCloseDrawer = () => {
        setDrawer(false);
    }

    return (
        <>
            <Header onShowDrawer={onShowDrawer} />
            <main id='main'>
                {children}
            </main>
            <DrawerMenu visible={drawer} onClose={onCloseDrawer} />
            <Footer />
        </>
    )
}

export default Layout