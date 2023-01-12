import React from 'react';
import Image from 'next/image';

const OurProducts = () => {
  return (
    <section id='OurProducts'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 OurProducts_title'>Sản phẩm của chúng tôi</div>
        </div>
        <div className='row'>
          <div className='col-4 OurProducts_col'>
            <Image
              className='OurProducts_image'
              src={require('@/public/images/webdesign/image54.png')}
              alt=''
            />
            <div className='OurProducts_image_text'>Digital Agency</div>
          </div>
          <div className='col-4 OurProducts_col'>
            <Image
              className='OurProducts_image'
              src={require('@/public/images/webdesign/image51.png')}
              alt=''
            />
            <div className='OurProducts_image_text'>Digital Agency</div>
          </div>
          <div className='col-4 OurProducts_col'>
            <Image
              className='OurProducts_image'
              src={require('@/public/images/webdesign/image52.png')}
              alt=''
            />
            <div className='OurProducts_image_text'>Digital Agency</div>
          </div>
        </div>
        <div className='row pt-5'>
          <div className='col-4 OurProducts_col'>
            <Image
              className='OurProducts_image'
              src={require('@/public/images/webdesign/image54.png')}
              alt=''
            />
            <div className='OurProducts_image_text'>Digital Agency</div>
          </div>
          <div className='col-4 OurProducts_col'>
            <Image
              className='OurProducts_image'
              src={require('@/public/images/webdesign/image55.png')}
              alt=''
            />
            <div className='OurProducts_image_text'>Digital Agency</div>
          </div>
          <div className='col-4 OurProducts_col'>
            <Image
              className='OurProducts_image'
              src={require('@/public/images/webdesign/image52.png')}
              alt=''
            />
            <div className='OurProducts_image_text'>Digital Agency</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
