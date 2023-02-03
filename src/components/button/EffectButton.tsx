import classNames from 'classnames';
import React, { CSSProperties } from 'react'

type Props = {
    color?: 'primary' | 'white',
    name: string;
    styles?: any;
    className?: string;
    onClick?: (e: any) => any
}

function EffectButton({ color = 'primary', name, styles = {}, className = "", onClick = (e: any) => null }: Props) {

    const _styles: CSSProperties = {
        ...styles
    }

    return (
        <button style={_styles} onClick={onClick} className={`${className} btn0 button_effect button_effect__${color}`}>
            <span>{name}</span>
        </button>
    )
}

export default EffectButton