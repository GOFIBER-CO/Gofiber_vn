import React, { useState, useEffect } from 'react';
import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react/';
import ButtonBackToTop from '../components/button/ButtonBackToTop';
import { useAppDispatch } from '../redux';
import { initFP } from '../redux/slice';
import DrawerMenu from './DrawerMenu';
import Footer from './Footer';
import Header from './Header';
import { useRouter } from 'next/router';
import { notification } from 'antd';

type Props = {
  children: JSX.Element;
};

function Layout({ children }: Props) {
  const dispatch = useAppDispatch();
  const [drawer, setDrawer] = useState<boolean>(false);
  const { data } = useVisitorData(
    { extendedResult: true },
    { immediate: true },
  );
  const [_, contextHolder] = notification.useNotification();

  useEffect(() => {
    const init = async (data: any) => {
      const { requestId, visitorId } = data;

      const params = {
        visId: visitorId,
        reqId: requestId,
        domain: window?.location?.protocol + '//' + window?.location?.host,
      };

      await dispatch(initFP(params)).unwrap();
    };

    if (data) init(data);
  }, [data]);

  const onShowDrawer = () => {
    setDrawer(true);
  };

  const onCloseDrawer = () => {
    setDrawer(false);
  };

  return (
    <>
      <Header onShowDrawer={onShowDrawer} />
      <main id="main">
        {contextHolder}
        {children}
      </main>
      <DrawerMenu visible={drawer} onClose={onCloseDrawer} />
      <ButtonBackToTop />
      <Footer />
    </>
  );
}

export default Layout;
