import Image from 'next/image'
import React from 'react'

type Props = {
    item: any
}

function SecurityItem({ item }: Props) {
    return (
        <div className='security-item row'>
            <div className='col col-12 col-md-5 hide-for-medium'>
                <div className='img'>
                    <Image width={400} height={200} src={item.image} alt={item.title} />
                </div>
            </div>
            <div className='col col-12 col-md-7 mt-3 mt-lg-0'>
                <h4 className='h4'>{item.title}</h4>
                <ul className='has-style'>
                    <li>{item.content1}</li>
                    <li>{item.content2}</li>
                </ul>
            </div>
        </div>
    )
}

export default SecurityItem