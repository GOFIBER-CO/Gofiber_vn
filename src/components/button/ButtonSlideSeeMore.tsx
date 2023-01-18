import Image from 'next/image'
import React from 'react'

type Props = {
    isBest: boolean,
    alt: string,
}

function ButtonSlideSeeMore({ isBest, alt }: Props) {
    return (
        <div className='my-3 text-center'>
            <button className={`btn0 btn-see-more-feature ${isBest ? 'best' : ''}`}>
                <span>Xem tất cả tính năng</span>
                <Image src={require("@/public/images/icons/right.svg")} alt={alt} />
            </button>
        </div>

    )
}

export default ButtonSlideSeeMore