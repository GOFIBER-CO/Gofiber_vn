import { HOME2_IMAGE } from "@/src/utils";
import React, { useState } from "react";
import BannerItem from "./BannerItem";

const data = [
    {
        id: 1,
        name: "STARTER 1",
        extra: "Giải pháp lý tưởng cho người mới",
        ssdSize: "1GB ",
        cpuCore: "1",
        addonDomain: "1",
        ramSize: "1GB",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "20MB/s",
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
        ssdSize: "3GB",
        addonDomain: "2 ",
        cpuCore: "1",
        ramSize: "1GB",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "20MB/s",
        worldPress: "Quà tặng WordPress miễn phí",
        ssl: "Tặng Bảo mật SSL Let's Encrypt",
        cpanel: "Giao diện Cpanel",
        Enterprise: "LiteSpeed Enterprise",
        price: 50000,
        link: "/thue-vps",
    },
    {
        id: 3,

        name: "STARTER 3",
        extra: "Giải pháp lý tưởng cho người mới",
        ssdSize: "4GB",
        addonDomain: "3",
        cpuCore: "1",
        ramSize: "2GB",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "20MB/s",
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
        ssdSize: "10GB",
        addonDomain: "3",
        cpuCore: "2",
        ramSize: "2GB",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "20MB/s",
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
        ssdSize: "15GB",
        addonDomain: "5",
        cpuCore: "2",
        ramSize: "2GB",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "20MB/s",
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
        ssdSize: "20GB",
        addonDomain: "8 ",
        cpuCore: "3 ",
        ramSize: "3GB",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "20MB/s",
        worldPress: "Quà tặng WordPress miễn phí",
        ssl: "Tặng Bảo mật SSL Let's Encrypt",
        cpanel: "Giao diện Cpanel",
        Enterprise: "LiteSpeed Enterprise",
        price: 120000,
        link: "/thue-vps",
    },

];
const data1 = [
    {
        id: 1,
        name: "DN-GO A",
        extra: "Giải pháp lý tưởng cho người mới",
        ssdSize: "20GB ",
        cpuCore: "2",
        addonDomain: "25",
        ramSize: "4GB",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "100MB/s",
        worldPress: "Tài nguyên WordPress miễn phí",
        ssl: "Tặng Bảo mật SSL Let's Encrypt",
        cpanel: "Giao diện Cpanel",
        Enterprise: "LiteSpeed Enterprise",
        price: 215000,
        rate: 1,

        link: "/thue-vps",
    },
    {
        id: 2,

        name: "DN-GO B",
        extra: "Giải pháp lý tưởng cho người mới",
        ssdSize: "25GB",
        addonDomain: "Unlimited ",
        cpuCore: "4",
        ramSize: "6GB",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "100MB/s",
        worldPress: "Tài nguyên WordPress miễn phí",
        ssl: "Tặng Bảo mật SSL Let's Encrypt",
        cpanel: "Giao diện Cpanel",
        Enterprise: "LiteSpeed Enterprise",
        price: 365000,
        link: "/thue-vps",
    },
    {
        id: 3,

        name: "DN-GO C",
        extra: "Giải pháp lý tưởng cho người mới",
        ssdSize: "55GB",
        addonDomain: "Unlimited",
        cpuCore: "6",
        ramSize: "8GB",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "100MB/s",
        worldPress: "Tài nguyên WordPress miễn phí",
        ssl: "Tặng Bảo mật SSL Let's Encrypt",
        cpanel: "Giao diện Cpanel",
        Enterprise: "LiteSpeed Enterprise",
        price: 655000,
        link: "/thue-vps",
    },


];
const data2 = [
    {
        id: 1,
        name: "WP-GO 01",
        extra: "Giải pháp lý tưởng cho người mới",
        ssdSize: "1GB ",
        cpuCore: "1",
        addonDomain: "1",
        ramSize: "4GB",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "100MB/s",
        worldPress: "Tài nguyên WordPress miễn phí",
        ssl: "Tặng Bảo mật SSL Let's Encrypt",
        cpanel: "Giao diện Cpanel",
        Enterprise: "LiteSpeed Enterprise",
        price: 30000,
        rate: 1,

        link: "/thue-vps",
    },
    {
        id: 2,

        name: "WP-GO 02",
        extra: "Giải pháp lý tưởng cho người mới",
        ssdSize: "2GB",
        addonDomain: "3 ",
        cpuCore: "1",
        ramSize: "2GB",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "100MB/s",
        worldPress: "Tài nguyên WordPress miễn phí",
        ssl: "Tặng Bảo mật SSL Let's Encrypt",
        cpanel: "Giao diện Cpanel",
        Enterprise: "LiteSpeed Enterprise",
        price: 50000,
        link: "/thue-vps",
    },
    {
        id: 3,

        name: "WP-GO 03",
        extra: "Giải pháp lý tưởng cho người mới",
        ssdSize: "4GB",
        addonDomain: "5",
        cpuCore: "2",
        ramSize: "2GB",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "100MB/s",
        worldPress: "Tài nguyên WordPress miễn phí",
        ssl: "Tặng Bảo mật SSL Let's Encrypt",
        cpanel: "Giao diện Cpanel",
        Enterprise: "LiteSpeed Enterprise",
        price: 90000,
        link: "/thue-vps",
    },
    {
        id: 4,

        name: "WP-GO 04",
        extra: "Giải pháp lý tưởng cho người mới",
        ssdSize: "8GB",
        addonDomain: "10",
        cpuCore: "2",
        ramSize: "3GB",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "100MB/s",
        worldPress: "Tài nguyên WordPress miễn phí",
        ssl: "Tặng Bảo mật SSL Let's Encrypt",
        cpanel: "Giao diện Cpanel",
        Enterprise: "LiteSpeed Enterprise",
        price: 120000,
        link: "/thue-vps",
    },
    {
        id: 5,

        name: "WP-GO 05",
        extra: "Giải pháp lý tưởng cho người mới",
        ssdSize: "10GB",
        addonDomain: "15",
        cpuCore: "3",
        ramSize: "3GB",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "100MB/s",
        worldPress: "Tài nguyên WordPress miễn phí",
        ssl: "Tặng Bảo mật SSL Let's Encrypt",
        cpanel: "Giao diện Cpanel",
        Enterprise: "LiteSpeed Enterprise",
        price: 140000,
        link: "/thue-vps",
    },
    {
        id: 6,

        name: "WP-GO 06",
        extra: "Giải pháp lý tưởng cho người mới",
        ssdSize: "15GB",
        addonDomain: "20",
        cpuCore: "3",
        ramSize: "3GB",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "100MB/s",
        worldPress: "Tài nguyên WordPress miễn phí",
        ssl: "Tặng Bảo mật SSL Let's Encrypt",
        cpanel: "Giao diện Cpanel",
        Enterprise: "LiteSpeed Enterprise",
        price: 220000,
        link: "/thue-vps",
    },


];
const data3 = [
    {
        id: 1,
        name: "SEO A",
        extra: "Giải pháp lý tưởng cho người mới",
        ssdSize: "10GB ",
        iPClassC: "2",
        cpuCore: "2",
        addonDomain: "10",
        ramSize: "3GB",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "100MB/s",
        worldPress: "Tài nguyên WordPress miễn phí",
        ssl: "SSL Miễn Phí",

        price: 30000,
        rate: 1,

        link: "/thue-vps",
    },
    {
        id: 2,

        name: "SEO B",
        extra: "Giải pháp lý tưởng cho người mới",
        ssdSize: "10GB",
        iPClassC: "5",
        cpuCore: "2",
        addonDomain: "15",
        ramSize: "4GB",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "100MB/s",
        worldPress: "Tài nguyên WordPress miễn phí",
        ssl: "SSL Miễn Phí",
        price: 250000,
        link: "/thue-vps",
    },
    {
        id: 3,

        name: "SEO C",
        extra: "Giải pháp lý tưởng cho người mới",
        ssdSize: "40GB",
        iPClassC: "10",
        cpuCore: "3",
        addonDomain: "30",
        ramSize: "5GB",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "100MB/s",
        worldPress: "Tài nguyên WordPress miễn phí",
        ssl: "SSL Miễn Phí",
        price: 450000,
        link: "/thue-vps",
    },



];
const NVME = [
    {
        id: 10,
        name: "KICKSTART 1",
        extra: "Giải pháp lý tưởng cho người mới",
        ssdSize: "4GB ",
        cpuCore: "1 ",
        addonDomain: "2 ",
        ramSize: "2GB ",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "100MB/s ",
        worldPress: "Quà tặng WordPress miễn phí",
        ssl: "Tặng Bảo mật SSL Let's Encrypt",
        cpanel: "Giao diện Cpanel",
        Enterprise: "LiteSpeed Enterprise",
        price: 70000,
        rate: 1,

        link: "/thue-vps",
    },
    {
        id: 11,

        name: "KICKSTART 2",
        extra: "Giải pháp lý tưởng cho người mới",
        ssdSize: "8GB",
        addonDomain: "3 ",
        cpuCore: "2 ",
        ramSize: "2GB ",
        inodes: "Không giới hạn Inodes",
        subdomain: "Không giới hạn Sub-domains",
        database: "Không giới hạn MySQL Databases",
        diskIO: "100MB/s ",
        worldPress: "Quà tặng WordPress miễn phí",
        ssl: "Tặng Bảo mật SSL Let's Encrypt",
        cpanel: "Giao diện Cpanel",
        Enterprise: "LiteSpeed Enterprise",
        price: 100000,
        link: "/thue-vps",
    },
    {
        id: 12,

        name: "KICKSTART 3",
        extra: "Giải pháp lý tưởng cho người mới",
        ssdSize: "12GB",
        addonDomain: "4 ",
        cpuCore: "2 ",
        ramSize: "2GB ",
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
    const [dataforbanner, setDataForBanner] = useState<any>(data)
    const [nVME, setNVME] = useState(false)
    const [visibleItems, setVisibleItems] = useState<any>({ id: null, showMore: false, forNVME: false }); // start with 3 visible items
    const handleButtonClick = (id: any) => {
        setActiveButton(id)
        if (id === 1) {
            setDataForBanner(data)
            setNVME(false)
        } else if (id === 2) {
            setDataForBanner(data1)
            setNVME(true)
        } else if (id == 3) {
            setDataForBanner(data2)
            setNVME(true)

        } else if (id == 4) {
            setDataForBanner(data3)
            setNVME(true)

        }
        setVisibleItems({ id: 0, showMore: false })

    }
    const handleShowMore = ({ id, forBanner }: any) => {
        setVisibleItems({ id, showMore: true, forBanner: forBanner })
    }
    return (
        <section id="section-hot-product">
            <div className="container">
                <div data-aos="fade-up" className="text-center" style={{ marginBottom: "40px" }}>
                    <h2 className="h2">Dùng thử hosting giá rẻ 120 giờ MIỄN PHÍ</h2>
                </div>
                <div className="d-flex justify-content-center flex-wrap " style={{ gap: "2", }}>
                    <div className="mx-auto d-flex justify-content-center flex-wrap " >

                        {buttonList.map(buttons => (
                            <button key={buttons.id} className={`btnHosting`} onClick={() => handleButtonClick(buttons.id)} style={activeButton !== buttons.id
                                ? { background: "white", color: "#00ACD7" } : { color: "white" }}>{buttons.name}</button>
                        ))}
                    </div>

                </div>
                {nVME !== true ? <div className="text-center mt-5">

                    <h3 className="h2">SSD</h3>
                </div> : null}

                <div className="mt-4 row" data-aos="fade-up">
                    {dataforbanner.map((item: any) => (<>
                        <BannerItem item={item} key={item.id} showMore={handleShowMore} itemShowMore={visibleItems} NVMe={nVME} isNVMe={false} />
                    </>
                    ))}
                </div>
                {nVME !== true ?
                    <>
                        <div className="text-center mt-5">
                            <h3 className="h2">SSD NVME</h3>
                        </div>
                        <div className="mt-4 row" data-aos="fade-up">
                            {NVME.map((item) => (<>
                                <BannerItem item={item} key={item.id} showMore={handleShowMore} itemShowMore={visibleItems} NVMe={true} isNVMe={true} />
                            </>
                            ))}
                        </div>
                    </>
                    : null}
                <div className="termInfo" style={{ marginLeft: "26px" }}>
                    Bảng giá chưa bao gồm thuế VAT và ưu đãi (nếu có)
                    Tài nguyên cộng thêm (+) là được tặng thêm khi đăng ký mới và các dịch vụ cũ, không bao gồm các dịch vụ áp dụng ưu đãi giảm giá trọn đời.
                </div>
            </div>
        </section >
    );
}

export default Banner;
