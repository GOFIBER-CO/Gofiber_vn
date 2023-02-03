import { ICON } from '@/src/utils'
import { Icon } from '@iconify/react'
import React from 'react'

type Props = {
    item: any
}

function SpecificationItem({ item }: Props) {

    const render = (content?: any) => {
        if (content) return <p>{content}</p>

        return <Icon icon={ICON.CHECKED} />
    }

    return (
        <>
            <div className="name-server">
                <p>{item.title}</p>
            </div>
            <div className="info-server">
                {render(item?.fw1?.checked ? null : item?.fw1.content)}
            </div>
            <div className="info-server">
                {render(item?.fw1?.checked ? null : item?.fw2.content)}
            </div>
            <div className="info-server">
                {render(item?.fw1?.checked ? null : item?.fw3.content)}
            </div>
            <div className="info-server">
                {render(item?.fw1?.checked ? null : item?.fw4.content)}
            </div>
            <div className="info-server">
                {render(item?.fw1?.checked ? null : item?.fw5.content)}
            </div>
            <div className="info-server">
                {render(item?.fw1?.checked ? null : item?.fw6.content)}
            </div>
        </>
    )
}

export default SpecificationItem