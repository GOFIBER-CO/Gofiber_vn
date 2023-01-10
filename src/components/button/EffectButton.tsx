import React from 'react'

type Props = {
    color?: 'primary' | 'white',
    name: string;
}

function EffectButton({ color = 'primary', name }: Props) {
    return (
        <button className='button_effect'>
            <span>{name}</span>
        </button>
    )
}

export default EffectButton