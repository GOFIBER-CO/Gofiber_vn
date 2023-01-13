import React from 'react';
import Image from 'next/image';

const OurProducts = () => {
  return (
    <section id="OurProducts">
      <div className="container">
        <div className="row">
          <div className="col-12 OurProducts__title pb-2">
            <div className="OurProducts__title_bg">
              <span className="OurProducts__title_text">
                Sản phẩm của chúng tôi
              </span>
              <Image
                src={require('@/public/images/webdesign/element1.png')}
                alt=""
                // style={{ zIndex: '10' }}
                className="OurProducts__image_absolute"
              />
              <Image
                src={require('@/public/images/webdesign/element2.png')}
                alt=""
                // style={{ zIndex: '10' }}
                className="OurProducts__image_absolute_right"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 OurProducts_col">
            <div style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
              <Image
                className="OurProducts_image"
                src={require('@/public/images/webdesign/image54.png')}
                alt=""
              />
            </div>

            <div className="OurProducts_image_text">Digital Agency</div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 OurProducts_col">
            <div style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
              <Image
                className="OurProducts_image"
                src={require('@/public/images/webdesign/image54.png')}
                alt=""
              />
            </div>

            <div className="OurProducts_image_text">Digital Agency</div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 OurProducts_col">
            <div style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
              <Image
                className="OurProducts_image"
                src={require('@/public/images/webdesign/image54.png')}
                alt=""
              />
            </div>

            <div className="OurProducts_image_text">Digital Agency</div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 OurProducts_col">
            <div style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
              <Image
                className="OurProducts_image"
                src={require('@/public/images/webdesign/image54.png')}
                alt=""
              />
            </div>

            <div className="OurProducts_image_text">Digital Agency</div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 OurProducts_col">
            <div style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
              <Image
                className="OurProducts_image"
                src={require('@/public/images/webdesign/image54.png')}
                alt=""
              />
            </div>

            <div className="OurProducts_image_text">Digital Agency</div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 OurProducts_col">
            <div style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
              <Image
                className="OurProducts_image"
                src={require('@/public/images/webdesign/image54.png')}
                alt=""
              />
            </div>

            <div className="OurProducts_image_text">Digital Agency</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
