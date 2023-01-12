import React from 'react';
import Image from 'next/image';
import OurProducts from './../src/containers/web-design/OurProducts/index';

function webDesign() {
  return (
    <>
      <div id='webDesign'>
        <div className='container webDesign__container'>
          <div className='row'>
            <div className='col-6 webDesign__container_left'>
              <div className=' webDesign__container_left_title'>
                Thiết kế Website
              </div>
              <div className=' webDesign__container_left_link'>
                <span className='webDesign__container_left_link_text'>
                  Trang chủ{' '}
                </span>
                <span className='webDesign__container_left_link_text'>
                  {' '}
                  &gt;{' '}
                </span>
                <span className='webDesign__container_left_link_text'>
                  Thiết kế Website
                </span>
              </div>
            </div>
            <div className='col-6 webDesign__container_right'>
              <Image
                className='webDesign__container_right_logo'
                src={require('@/public/images/webdesign/bg-anh1.png')}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      <div id='how__to'>
        <div className='container'>
          <div className='row' style={{ padding: '5% 5% 0% 5%' }}>
            <div className='col-12 how__to_title'>
              How To Improve And Measure Your Progress Learning Web Design
            </div>
            <div className='col-12 how__to_text'>
              Must explain to you how all this mistaken idea of denouncing works
              pleasure and praising uts pain was born and I will gives you a
              itself completed account of the system, and sed expounds the ut
              actual teachings of that greater sed explores truth. Denouncing
              works pleasures and praising pains was us born and I will gives
              you a completed ut workers accounts of the system. sit aspernatur
              aut odit aut fugit, sed quia consequuntur magni dolores eos qui
              ratione voluptatem sequi nesciunt.
            </div>
            <Image
              className='how__to_logo'
              src={require('@/public/images/webdesign/image43.png')}
              alt=''
            />
            <div className='col-12 how__to_title1'>Personal Exprience</div>
            <div className='col-12 how__to_text'>
              Must explain to you how all this mistaken idea of denouncing works
              pleasure and praising uts pain was born and I will gives you a
              itself completed account of the system, and sed expounds the ut
              actual teachings of that greater sed explores truth. Denouncing
              works pleasures and praising pains was us born and I will gives
              you a completed ut workers accounts of the system. sit aspernatur
              aut odit aut fugit, sed quia consequuntur magni dolores eos qui
              ratione voluptatem sequi nesciunt
            </div>
            <div className='col-12 how__to_text'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet,
            </div>
          </div>
          <div className='row' style={{ padding: '0px 5%' }}>
            <div className='col-4 how__to_image'>
              <Image
                src={require('@/public/images/webdesign/Think.png')}
                alt=''
                // style={{ zIndex: '10' }}
                className='how__to_image_absolute'
              />
              <Image
                src={require('@/public/images/webdesign/image44.png')}
                alt=''
                style={{ marginLeft: '13%' }}
              />
            </div>
            <div className='col-4'>
              <Image
                src={require('@/public/images/webdesign/Make.png')}
                alt=''
                style={{ paddingTop: '176px' }}
              />
            </div>
            <div className='col-4 '>
              <Image
                className=''
                src={require('@/public/images/webdesign/Solve.png')}
                alt=''
                style={{ paddingTop: '176px' }}
              />
            </div>
          </div>
        </div>
      </div>
      <OurProducts />
    </>
  );
}

export default webDesign;
