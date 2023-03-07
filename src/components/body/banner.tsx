import { HOME2_IMAGE } from "@/src/utils";
import React, { useState } from "react";
import BannerItem from "./BannerItem";

const data = [
    {
        id: 1,
        name: "STARTER 1",
        extra: "Giải pháp lý tưởng cho người mới",
        ssdSize: "1GB dung lượng SSD",
        cpuCore: "1GB CPU Core",
        addonDomain: "1 Addon Domain",
        ramSize: "1GB Core",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "20MB/s Disk I/O",
        worldPress: "Quà tặng WordPress miễn phí",
        ssl: "Tặng Bảo mật SSL Let's Encrypt",
        cpanel: "Giao diện Cpanel",
        Enterprise: "LiteSpeed Enterprise",
        price: 30000,
        rate: 1,

        link: "/thue-vps",
    },
    {
        id: 2,

        name: "STARTER 2",
        extra: "Giải pháp lý tưởng cho người mới",
        ssdSize: "3GB dung lượng SSD",
        addonDomain: "2 Addon Domain",
        cpuCore: "1 CPU Core",
        ramSize: "1GB Core",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "20MB/s Disk I/O",
        worldPress: "Quà tặng WordPress miễn phí",
        ssl: "Tặng Bảo mật SSL Let's Encrypt",
        cpanel: "Giao diện Cpanel",
        Enterprise: "LiteSpeed Enterprise",
        price: 30000,
        link: "/thue-vps",
    },
    {
        id: 3,

        name: "STARTER 3",
        extra: "Giải pháp lý tưởng cho người mới",
        ssdSize: "4GB dung lượng SSD",
        addonDomain: "3 Addon Domain",
        cpuCore: "1 CPU Core",
        ramSize: "2GB Core",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "20MB/s Disk I/O",
        worldPress: "Quà tặng WordPress miễn phí",
        ssl: "Tặng Bảo mật SSL Let's Encrypt",
        cpanel: "Giao diện Cpanel",
        Enterprise: "LiteSpeed Enterprise",
        price: 65000,
        link: "/thue-vps",
    },
    {
        id: 4,
        name: "STARTER 4",
        extra: "Giải pháp lý tưởng cho người mới",
        ssdSize: "10GB dung lượng SSD",
        addonDomain: "3 Addon Domain",
        cpuCore: "2 CPU Core",
        ramSize: "2GB Core",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "20MB/s Disk I/O",
        worldPress: "Quà tặng WordPress miễn phí",
        ssl: "Tặng Bảo mật SSL Let's Encrypt",
        cpanel: "Giao diện Cpanel",
        Enterprise: "LiteSpeed Enterprise",
        price: 95000,

        link: "/thue-vps",
    },
    {
        id: 5,
        name: "STARTER 5",
        extra: "Giải pháp lý tưởng cho người mới",
        ssdSize: "15GB dung lượng SSD",
        addonDomain: "5 Addon Domain",
        cpuCore: "2 CPU Core",
        ramSize: "2GB Core",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "20MB/s Disk I/O",
        worldPress: "Quà tặng WordPress miễn phí",
        ssl: "Tặng Bảo mật SSL Let's Encrypt",
        cpanel: "Giao diện Cpanel",
        Enterprise: "LiteSpeed Enterprise",
        price: 120000,
        link: "/thue-vps",
    },
    {
        id: 6,
        name: "STARTER 6",
        extra: "Giải pháp lý tưởng cho người mới",
        ssdSize: "20GB dung lượng SSD",
        addonDomain: "8 Addon Domain",
        cpuCore: "3 CPU Core",
        ramSize: "3GB Core",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "20MB/s Disk I/O",
        worldPress: "Quà tặng WordPress miễn phí",
        ssl: "Tặng Bảo mật SSL Let's Encrypt",
        cpanel: "Giao diện Cpanel",
        Enterprise: "LiteSpeed Enterprise",
        price: 120000,
        link: "/thue-vps",
    },

];


const NVME = [
    {
        id: 1,
        name: "KICKSTART 1",
        extra: "Giải pháp lý tưởng cho người mới",
        ssdSize: "4GB dung lượng SSD NVMe",
        cpuCore: "1 CPU Core",
        addonDomain: "2 Addon Domain",
        ramSize: "2GB Core",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "100MB/s Disk I/O",
        worldPress: "Quà tặng WordPress miễn phí",
        ssl: "Tặng Bảo mật SSL Let's Encrypt",
        cpanel: "Giao diện Cpanel",
        Enterprise: "LiteSpeed Enterprise",
        price: 70000,
        rate: 1,

        link: "/thue-vps",
    },
    {
        id: 2,

        name: "KICKSTART 2",
        extra: "Giải pháp lý tưởng cho người mới",
        ssdSize: "8GB dung lượng SSD NVMe",
        addonDomain: "3 Addon Domain",
        cpuCore: "2 CPU Core",
        ramSize: "2GB Core",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "100MB/s Disk I/O",
        worldPress: "Quà tặng WordPress miễn phí",
        ssl: "Tặng Bảo mật SSL Let's Encrypt",
        cpanel: "Giao diện Cpanel",
        Enterprise: "LiteSpeed Enterprise",
        price: 100000,
        link: "/thue-vps",
    },
    {
        id: 3,

        name: "KICKSTART 3",
        extra: "Giải pháp lý tưởng cho người mới",
        ssdSize: "12GB dung lượng SSD NVMe",
        addonDomain: "4 Addon Domain",
        cpuCore: "2 CPU Core",
        ramSize: "2GB Core",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "100MB/s Disk I/O",
        worldPress: "Quà tặng WordPress miễn phí",
        ssl: "Tặng Bảo mật SSL Let's Encrypt",
        cpanel: "Giao diện Cpanel",
        Enterprise: "LiteSpeed Enterprise",
        price: 120000,
        link: "/thue-vps",
    },



];
const vps = [
    {
        _id: "63e3845ea116ee4eab4127ff",
        name: "CLOUD VPS 1GB",
        slug: "cloud-vps-1gb",
        extra: "Giải pháp lý tưởng cho người mới",
        price: 190000,
        feature: ["1 CPU", "1GB RAM", "15GB SSD", "Công nghệ Ảo Hoá KVM"],
        security: ["SSL Miễn phí Không giới hạn", "Hạn chế tấn công DDOS"],
        free: ["Hỗ trợ IPv6", "Sao lưu hàng tuần"],
        isBest: true,
        tab: "63e36e0be435aa416b6a9069",
        status: 1,
        createdAt: "2023-02-08T11:15:42.342Z",
        updatedAt: "2023-02-09T04:19:38.286Z",
        __v: 0,
        advance: [],
    },
    {
        _id: "63e385f2a116ee4eab41283f",
        name: "CLOUD VPS 2GB",
        slug: "cloud-vps-2gb",
        extra: "Giải pháp lý tưởng cho dự án nhỏ",
        price: 380000,
        feature: ["2 CPU", "2GB RAM", "20GB SSD", "Công nghệ Ảo Hoá KVM"],
        security: ["SSL Miễn phí Không giới hạn", "Hạn chế tấn công DDOS"],
        free: ["Hỗ trợ IPv6", "Sao lưu hàng tuần"],
        isBest: false,
        tab: "63e36e0be435aa416b6a9069",
        status: 1,
        createdAt: "2023-02-08T11:22:26.968Z",
        updatedAt: "2023-02-08T11:22:26.968Z",
        __v: 0,
    },
    {
        _id: "63e3867ea116ee4eab412847",
        name: "CLOUD VN 4G",
        slug: "cloud-vn-4g",
        extra: "Giải pháp lý tưởng cho dự án nhỏ",
        price: 720000,
        feature: ["2 CPU", "8GB RAM", "60GB SSD", "Công nghệ Ảo Hoá KVM"],
        security: ["SSL Miễn phí Không giới hạn", "Hạn chế tấn công DDOS"],
        free: ["Hỗ trợ IPv6", "Sao lưu hàng tuần"],
        isBest: false,
        tab: "63e36e0be435aa416b6a9069",
        status: 1,
        createdAt: "2023-02-08T11:24:46.074Z",
        updatedAt: "2023-02-10T11:15:24.355Z",
        __v: 0,
        advance: [],
    },
    {
        _id: "63e386a8a116ee4eab41284b",
        name: "CLOUD VN 8G",
        slug: "cloud-vn-8g",
        extra: "Giải pháp lý tưởng cho dự án vừa và doanh nghiệp nhỏ",
        price: 1400000,
        feature: ["4 CPU", "8GB RAM", "90GB SSD", "Công nghệ Ảo Hoá KVM"],
        security: ["SSL Miễn phí Không giới hạn", "Hạn chế tấn công DDOS"],
        free: ["Hỗ trợ IPv6", "Sao lưu hàng tuần"],
        isBest: false,
        tab: "63e36e0be435aa416b6a9069",
        status: 1,
        createdAt: "2023-02-08T11:25:28.533Z",
        updatedAt: "2023-02-08T11:25:28.533Z",
        __v: 0,
    },
    {
        _id: "63e386e8a116ee4eab41284f",
        name: "CLOUD VN 16G",
        slug: "cloud-vn-16g",
        extra: "Giải pháp lý tưởng cho doanh nghiệp vừa",
        price: 2300000,
        feature: ["8 CPU", "16GB RAM", "150GB SSD", "Công nghệ Ảo Hoá KVM"],
        security: ["SSL Miễn phí Không giới hạn", "Hạn chế tấn công DDOS"],
        free: ["Hỗ trợ IPv6", "Sao lưu hàng tuần"],
        isBest: false,
        tab: "63e36e0be435aa416b6a9069",
        status: 1,
        createdAt: "2023-02-08T11:26:32.554Z",
        updatedAt: "2023-02-08T11:26:32.554Z",
        __v: 0,
    },
    {
        _id: "63e38705a116ee4eab412853",
        name: "CLOUD VN 32G",
        slug: "cloud-vn-32g",
        extra: "Giải pháp lý tưởng cho doanh nghiệp vừa",
        price: 3800000,
        feature: ["16 CPU", "32GB RAM", "300GB SSD", "Công nghệ Ảo Hoá KVM"],
        security: ["Hỗ trợ IPv6", "Sao lưu hàng tuần"],
        free: ["SSL Miễn phí Không giới hạn", "Hạn chế tấn công DDOS"],
        isBest: false,
        tab: "63e36e0be435aa416b6a9069",
        status: 1,
        createdAt: "2023-02-08T11:27:01.631Z",
        updatedAt: "2023-02-10T11:15:33.927Z",
        __v: 0,
        advance: [],
    },
];
const buttonList = [{ id: 1, name: "Giá Rẻ" }, { id: 2, name: "Doanh nghiệp" }, { id: 3, name: "Hosting Wordpress" }, { id: 4, name: "SEO Hosting" }]
function Banner() {
    const [activeButton, setActiveButton] = useState(1);
    const [visibleItems, setVisibleItems] = useState({ id: null, showMore: false }); // start with 3 visible items
    const handleButtonClick = (id: any) => {
        setActiveButton(id)
    }
    const handleShowMore = (id: any) => {
        setVisibleItems({ id, showMore: true })
    }
    return (
        <section id="section-hot-product">
            <div className="container">
                <div data-aos="fade-up" className="text-center" style={{ marginBottom: "40px" }}>
                    <h2 className="h2">Dùng thử hosting giá rẻ 120 giờ MIỄN PHÍ</h2>
                </div>
                <div className="d-flex justify-content-center flex-wrap " style={{ gap: "2", }}>
                    <div className="mx-auto d-flex justify-content-center flex-wrap " style={{ background: "#FAFAFA" }}>

                        {buttonList.map(buttons => (
                            <button key={buttons.id} className={`btnHosting`} onClick={() => handleButtonClick(buttons.id)} style={activeButton !== buttons.id
                                ? { background: "white", color: "#00ACD7" } : { color: "white" }}>{buttons.name}</button>
                        ))}
                    </div>

                </div>
                <div className="text-center mt-5">
                    <h2 className="h2">SSD</h2>
                </div>
                <div className="mt-4 row" data-aos="fade-up">
                    {data.map((item) => (<>
                        <BannerItem item={item} key={item.id} showMore={handleShowMore} itemShowMore={visibleItems} />
                    </>
                    ))}
                </div>
                <div className="text-center mt-5">
                    <h2 className="h2">SSD NVME</h2>
                </div>
                <div className="mt-4 row" data-aos="fade-up">
                    {NVME.map((item) => (<>
                        <BannerItem item={item} key={item.id} showMore={handleShowMore} itemShowMore={visibleItems} />
                    </>
                    ))}
                </div>
                <div className="termInfo">
                    Bảng giá chưa bao gồm thuế VAT và ưu đãi (nếu có)
                    Tài nguyên cộng thêm (+) là được tặng thêm khi đăng ký mới và các dịch vụ cũ, không bao gồm các dịch vụ áp dụng ưu đãi giảm giá trọn đời.
                </div>
            </div>
        </section >
    );
}

export default Banner;
