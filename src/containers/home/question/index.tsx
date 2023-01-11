import { ICON } from '@/src/utils'
import { Icon } from '@iconify/react'
import { Collapse } from 'antd'
import React, { useState } from 'react'

const { Panel } = Collapse;

const data = [
    {
        id: '1',
        title: "Chi phí ở đây đã rẻ nhất hay chưa?",
        content: `
        ‘Hosting giá rẻ nhất Việt Nam’ chưa bao giờ nằm trong chiến lược của GoFiber. Thay vào đó, chúng tôi đặt sự ưu tiên trong việc
         hài hoà giữa chất lượng dịch vụ mình cung cấp với mức phí dịch vụ hợp lý dành cho mọi đối tượng khách hàng.`
    }, {
        id: '2',
        title: "Gofiber có hỗ trợ Domain Name Server (DNS) trong trường hợp tôi chưa có Hosting?",
        content: "Trong trường hợp bạn chưa đăng ký dịch vụ Hosting, GoFiber sẽ hỗ trợ 1 DNS dành cho Domain name mà bạn đã đăng ký để tránh trường hợp Domain name của bạn không được trỏ đến đâu cả. Vì vậy, trong trường hợp bạn cần sự hỗ trợ hãy liên hệ với chúng tôi để bạn có được những dịch vụ tốt nhất với chi phí hợp lý."
    },
    {
        id: '3',
        title: "Nếu không hài lòng với dịch vụ tôi có được hoàn lại phí không?",
        content: "Chúng tôi sẽ hoàn trả lại 100% số tiền chúng tôi đã nhận với điều kiện: lý do bạn không hài lòng là đúng hoặc bạn không vi phạm quy định sử dụng dịch vụ của chúng tôi. Xem thêm về quy định hoàn tiền "
    },
    {
        id: '4',
        title: "Thời gian tạo account Hosting?",
        content: "Nếu tên miền của bạn đã được kích hoạt, sau 30 phút đồng hồ tính từ lúc bạn ký hợp đồng và thanh toán phí chúng tôi sẽ hoàn tất các thủ tục cho bạn."
    }
]

function Question() {
    const [chosen, setChosen] = useState<string>('');

    return (
        <div className='wrapper_question'>
            <Collapse
                accordion
                bordered={false}
                onChange={(e) => setChosen(e as string)}
                expandIcon={(e) => <Icon className='icon-edit' icon={ICON.EDIT} />}
            >
                {
                    data.map(item => <Panel extra={<Icon className={`icon-expand ${chosen === item.id ? 'active' : ''}`} icon={ICON.DOWN} />} header={item.title} key={item.id}>
                        <>
                            <div className='row position-relative mb-3'>
                                <div className='divider'></div>

                            </div>
                            <p>
                                {item.content}
                            </p>
                        </>
                    </Panel>)
                }
            </Collapse>
        </div>
    )
}

export default Question