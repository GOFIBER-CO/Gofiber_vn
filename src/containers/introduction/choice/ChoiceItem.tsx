import Image from 'next/image'
import React from 'react'

type Props = {
    item: any
}

function ChoiceItem({ item }: Props) {
    return (
        <div className='col col-12 col-md-6 col-lg-3 mt-4'>
            <div className='choice_item d-flex align-items-center flex-column'>
                <div className='img text-center'>
                    <Image width={100} height={100} src={item.image} alt={item.title} />
                </div>
                <h4 className='h4 text-center my-3'>{item.title}</h4>
                <p className='text-justify'>
                    {item.content}
                </p>
            </div>
        </div>
    )
}

export default ChoiceItem