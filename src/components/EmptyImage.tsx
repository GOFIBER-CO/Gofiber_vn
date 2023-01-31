import Image from 'next/image';
import React from 'react'

type Props = {
    text: string;
}

function EmptyImage({ text }: Props) {
    return (
        <div className='row justify-content-center'>
            <div className='col col-12 col-md-6 col-lg-6'>
                <div className='img'>
                    <Image src={require("@/public/images/nodata.png")} alt='Hiện tại không có bài viết1' />
                </div>
                <h4 className='h4 text-center'>Hiện tại không có tuyển dụng</h4>
            </div>
        </div>
    )
}

export default EmptyImage