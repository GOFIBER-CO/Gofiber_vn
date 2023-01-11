import Image from 'next/image';
import React from 'react'

type Props = {
    text: string;
    icon?: any;
}

function TextIconInfo({ icon, text }: Props) {
    return (
        <div className='text-icon-info d-flex align-items-start'>
            <Image src={icon} alt={text} />
            <p>{text}</p>
        </div>
    )
}

export default TextIconInfo