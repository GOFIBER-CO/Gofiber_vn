import { ICON } from '@/src/utils';
import { Icon } from '@iconify/react';
import React from 'react'

type Props = {
    color?: 'yellow' | 'green' | 'blue',
    content: string;
}

function TextIconPrice({ content, color = 'yellow' }: Props) {
    return (
        <div className='text-icon-price mt-2'>
            <a className='d-flex'>
                <Icon className={`${color}`} icon={ICON.CHECKED} />
                <p className='px-2'>{content}</p>
            </a>
        </div>
    )
}

export default TextIconPrice