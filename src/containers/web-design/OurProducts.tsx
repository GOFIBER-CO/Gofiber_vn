import React from 'react';
import TitleWithLine from '@/src/components/TitleWithLine';
import SliderOutProducts from './SliderOutProducts';
import { WEB_DESIGN_IMAGE } from '@/src/utils';

const data = [
    {
        id: 1,
        title: 'Website Agency Mẫu 1',
        image: WEB_DESIGN_IMAGE.AGENCY1
    },
    {
        id: 2,
        title: 'Website Agency Mẫu 2',
        image: WEB_DESIGN_IMAGE.AGENCY2
    },
    {
        id: 3,
        title: 'Website Trường Học',
        image: WEB_DESIGN_IMAGE.EDUCATION
    },
    {
        id: 4,
        title: 'Website Blog Cá Nhân',
        image: WEB_DESIGN_IMAGE.BLOG
    },
    {
        id: 5,
        title: 'Website Bán Khoá Học',
        image: WEB_DESIGN_IMAGE.PORTFOLIO
    }
]

const OurProducts = () => {
    return (
        <section id="section-our-products">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-12 col-md-8 col-lg-6">
                        <TitleWithLine title='SẢN PHẨM CỦA CHÚNG TÔI' />
                    </div>
                </div>
                <div className="row hide-for-small">
                    {
                        data.map((item, index) => (
                            <div key={item.id} className='col col-12 col-sm-6 col-lg-4'>
                                <div className='our-product-item'>
                                    <div className='img'>
                                        <img width={1000} height={1500} src={item.image} alt={item.title} />
                                    </div>
                                    <div className='mt-4 text-center'>
                                        <h4 className='h4'>
                                            {item.title}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <SliderOutProducts />
            </div>
        </section>
    );
};

export default OurProducts;
