import React from 'react'
import ChoiceItem from './ChoiceItem'

const data = [
    {
        id: '01',
        title: '01. Am hiểu về SEO',
        content: `Với đội ngũ SEO giàu kinh nghiệm và hoạt động có chiều sâu, 
        GOFIBER biết cách kết hợp nhuần nhuyễn và hiệu quả nhất với Marketing online để giúp khách hàng có được kết quả tốt nhất.`,
        image: require("@/public/images/introduction/Seo.png")
    },
    {
        id: '02',
        title: '02. Nền tảng CMS và Open Source',
        content: `Các nền tảng CMS và open source nổi tiếng như WordPress, Joomla có thể giúp khách hàng tiết kiệm nhiều thời gian và chi phí trong việc xây dựng website. Và, 
        GOFIBER tự tin rằng mình cực kỳ am hiểu lĩnh vực này và sẵn sàng mọi giải pháp để tích hợp theo nhu cầu của khách hàng.`,
        image: require("@/public/images/introduction/nentangcms.png")
    },
    {
        id: '03',
        title: '03. CHẤT LƯỢNG',
        content: `Câu nói “tiền nào thì của nấy” luôn luôn đúng… bên ngoài GOFIBER! Ở GOFIBER bạn có thể thấy các dịch vụ ‘giá rẻ’ với chất lượng từ tốt đến rất tốt. Sứ mệnh của GOFIBER là 
        đảm bảo các dịch vụ có giá cả hợp lý nhất, nhằm tri ân các khách hàng đã tạo điều kiện để GOFIBER cùng đồng hành và phát triển.`,
        image: require("@/public/images/introduction/chatluong.png")
    },
    {
        id: '04',
        title: '04. TÍNH NĂNG TÙY CHỌN',
        content: `Nếu các tính năng mà quý khách hàng mong muốn không có sẵn thì hãy để cho đội ngũ web developer của chúng tôi lo liệu. Bạn chỉ cần mô tả điều bạn muốn, các UX-UI designer và các 
        developer của GOFIBER sẵn sàng hoàn thiện tính năng đó trên các nền tảng thông dụng khác nhau như PHP, Java, Nodejs, React js, v.v.`,
        image: require("@/public/images/introduction/tinhnangtuychon.png")
    }
]

function ChoiceList() {
    return (
        <div className='choice_list row justify-content-center'>
            {
                data.map((item) => <ChoiceItem key={item.id} item={item} />)
            }
        </div>
    )
}

export default ChoiceList