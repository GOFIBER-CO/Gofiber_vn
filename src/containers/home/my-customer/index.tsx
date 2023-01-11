import Image from 'next/image'
import React from 'react'

const data = [
    {
        id: '1',
        image: require("@/public/images/introduction/customer-1.png")
    },
    {
        id: '2',
        image: require("@/public/images/introduction/customer-2.png")
    },
    {
        id: '3',
        image: require("@/public/images/introduction/customer-3.png")
    },
    {
        id: '4',
        image: require("@/public/images/introduction/customer-4.png")
    },
    {
        id: '5',
        image: require("@/public/images/introduction/customer-5.png")
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
                                <Image src={item.image} alt={item.id} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default MyCustomer