import React from 'react';
import Image from 'next/image';
import TitleWithLine from '@/src/components/TitleWithLine';
import SliderOutProducts from './SliderOutProducts';

const data = [
    {
        id: 1,
        title: 'Website Agency Mẫu 1',
        image: require("@/public/images/webdesign/Agency-1.png")
    },
    {
        id: 2,
        title: 'Website Agency Mẫu 2',
        image: require("@/public/images/webdesign/Agency-2.png")
    },
    {
        id: 3,
        title: 'Website Trường Học',
        image: require("@/public/images/webdesign/Education.png")
    },
    {
        id: 4,
        title: 'Website Blog Cá Nhân',
        image: require("@/public/images/webdesign/Blog.png")
    },
    {
        id: 5,
        title: 'Website Bán Khoá Học',
        image: require("@/public/images/webdesign/Portfolio.png")
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
                                        <Image src={item.image} alt={item.title} />
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
