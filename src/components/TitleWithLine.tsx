import Image from 'next/image'
import React from 'react'

type Props = {
    title: string;
    extra?: string;
    extra2?: string;
}

function TitleWithLine({ title, extra = "", extra2 = "" }: Props) {
    return (
        <>
            <div className='title-with-line'>
                <div className='position-relative'>
                    <Image className='left' src={require("@/public/images/element1.png")} alt='element1' />
                    <h2 style={{ minWidth: '200px' }} className='h2'>{title}</h2>
                    <Image className='right' src={require("@/public/images/element2.png")} alt='element2' />
                </div>
            </div>
            <div className="text-center">
                <p className="describe">
                    {extra}
                    <br />
                    {extra2}
                </p>
            </div>
        </>

    )
}

export default TitleWithLine