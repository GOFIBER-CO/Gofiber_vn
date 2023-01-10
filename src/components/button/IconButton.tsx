import React, { CSSProperties } from 'react';
import { Icon } from '@iconify/react';
import { ICON } from '@/src/utils';

type Props = {
    icon: string;
    onClick?: () => void;
    stylesButton?: CSSProperties;
    stylesIcon?: CSSProperties;
    classNameButton?: string;
}

function DrawerButton({ icon, onClick = () => null, stylesButton = {}, stylesIcon = {}, classNameButton = "" }: Props) {

    const _stylesButton: CSSProperties = {
        backgroundColor: 'transparent',
        ...stylesButton,
    }

    const _stylesIcon: CSSProperties = {
        ...stylesIcon,
    }

    return (
        <button onClick={onClick} style={_stylesButton} className={`btn0 ${classNameButton}`}>
            <Icon style={_stylesIcon} icon={icon} />
        </button>
    )
}

export default DrawerButton