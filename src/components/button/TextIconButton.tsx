import { Icon } from '@iconify/react';
import React, { CSSProperties } from 'react'

type Props = {
    color?: 'primary' | 'white',
    name: string;
    styles?: any;
    className?: string;
    onClick?: (e: any) => any;
    stylesIcon?: any;
    icon?: string;
    type?: 'button' | 'submit';
}

function TextIconButton({ color = 'primary', name, styles = {}, className = "",
    onClick = (e: any) => null,
    icon = "",
    stylesIcon = {}, type = 'button' }: Props) {

    const _styles: CSSProperties = {
        ...styles
    }

    const _stylesIcon: CSSProperties = {
        ...stylesIcon
    }

    return (
        <button type={type} style={_styles} onClick={onClick} className={`${className} btn0 button_text_icon button_text_icon__${color}`}>
            <span>{name}</span>
            {icon && <Icon style={_stylesIcon} icon={icon} />}
        </button>
    )
}

export default TextIconButton;