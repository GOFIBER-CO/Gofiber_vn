import { HOME_IMAGE } from '@/src/utils'
import Image from 'next/image'
import React from 'react'

const data = [
    {
        id: '1',
        image: HOME_IMAGE.CUSTOMER.FIRST
    },
    {
        id: '2',
        image: HOME_IMAGE.CUSTOMER.SECOND
    },
    {
        id: '3',
        image: HOME_IMAGE.CUSTOMER.THIRD
    },
    {
        id: '4',
        image: HOME_IMAGE.CUSTOMER.FOURTH
    },
    {
        id: '5',
        image: HOME_IMAGE.CUSTOMER.FIFTH
    }
]

function MyCustomer() {
    return (
        <>
            <div className='row align-items-center justify-content-center hide-for-small'>
                {
                    data.map((item) => (
                        <div key={item.id} className="col-4 col-md-2 mt-4">
                            <div className='d-block text-center'>
                                <img width={150} height={100} src={item.image} alt={item.id} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default MyCustomer