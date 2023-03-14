import React, { useState, useEffect } from 'react';
// import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react/";
import ButtonBackToTop from '../components/button/ButtonBackToTop';
import { useAppDispatch, useAppSelector } from '../redux';
import { initFP, updateDrawer } from '../redux/slice';
import DrawerMenu from './DrawerMenu';
import Footer from './Footer';
import Header from './Header';
import { notification } from 'antd';
import FooterV2 from './FooterV2';
import { useRouter } from 'next/router';
import HeaderFixed from '../containers/homev2/header/HeaderFixed';
import HeaderV2 from './HeaderV2';
import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react';

type Props = {
  children: JSX.Element;
};

function Layout({ children }: Props) {
  const dispatch = useAppDispatch();
  const { drawer } = useAppSelector(state => state.home);
  const router = useRouter();
  const { data } = useVisitorData(
    { extendedResult: true },
    { immediate: true }
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
    dispatch(updateDrawer(true));
  };

  const onCloseDrawer = () => {
    dispatch(updateDrawer(false));
  };

  return (
    <>
      {/* {!["/"].includes(router?.asPath) && (
        <Header onShowDrawer={onShowDrawer} />
      )} */}
      {/* <HeaderFixed /> */}
      <HeaderV2 />
      <main id='main'>
        {contextHolder}
        {children}
      </main>
      <DrawerMenu visible={drawer} onClose={onCloseDrawer} />
      <ButtonBackToTop />
      <FooterV2 />
    </>
  );
}

export default Layout;
