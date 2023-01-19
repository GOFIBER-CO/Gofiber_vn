import Image from 'next/image'
import React from 'react'

type Props = {
    isBest: boolean,
    alt: string,
    onClick?: () => void;
}

function ButtonSlideSeeMore({ isBest, alt, onClick = () => null }: Props) {
    return (
        <div className='my-3 text-center'>
            <button onClick={onClick} className={`btn0 btn-see-more-feature ${isBest ? 'best' : ''}`}>
                <span>Xem tất cả tính năng</span>
                <Image src={require("@/public/images/icons/right.svg")} alt={alt} />
            </button>
        </div>

    )
}

export default ButtonSlideSeeMore