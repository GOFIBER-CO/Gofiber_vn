import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

type Props = {
    imageDesktop: String,
    imageTablet: String,
    imageSmall: String
};

function BannerForHosting({ imageDesktop, imageTablet, imageSmall }: Props) {
    const router = useRouter();
    const [Image, setImage] = useState(imageDesktop)
    const [windowWidth, setWindowWidth] = useState(0)
    const [margin, setMargin] = useState<String>("")
    // Change image by responsive
    useEffect(() => {
        const handleResize = () => {

            setWindowWidth(window.innerWidth)
            if (window.innerWidth >= 1440 && imageDesktop !== undefined) {
                setMargin("200px")
                setImage(imageDesktop)
            } else if (window.innerWidth > 768 && window.innerWidth < 1439 && imageTablet !== undefined) {
                setImage(imageTablet)
                setMargin("10px")

            } else if (window.innerWidth < 768 && imageSmall !== undefined) {
                setImage(imageSmall)
                setMargin("10px")

            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)

    }, []);
    const handleOnclick = () => {
        router.push('/huong-dan-nhan-plugin-theme-wordpress-ban-quyen')
    }
    return (
        <>
            <div className="row justify-content-center align-items-center mt-4 w-screen" style={{ height: "533px", backgroundSize: "cover", backgroundImage: `url("${Image}")`, }}>
                <div className="col-12">
                    <div className="col-md-7 col-lg-4 ml-5" style={{ marginLeft: `${margin}` }} >
                        <h2 className="text-left text-white ">Quà tặng Wordpress trị giá hơn $1000.</h2>
                        <p className="text-left text-white fontBannerForHosting ">Để hỗ trợ tốt hơn cho các khách hàng sử dụng dịch vụ Web hosting cao cấp hay WordPress hosting tại GOFIBER, chúng tôi hân hạnh được hỗ trợ các plugin và theme bản quyền sau: Astra Pro (hosting giá rẻ), Astra Lifetime (gói PRO trở lên), WP Rocket, Rank Math Pro,... với tổng giá trị quà tặng lên đến $2000. Tất cả plugin và theme được hỗ trợ cập nhật tự động.</p>
                        <button
                            className="btn0 btn-intro d-flex align-items-center btn-white-to-primary btnforbanner"
                            style={{ paddingLeft: "30px", textAlign: 'center', width: "130px", height: "45px", borderRadius: "32px", }}
                            onClick={handleOnclick}
                        >
                            {/* <img src={ICON_IMAGE.MESSENGER} width={24} height={24} /> */}
                            <span >Tìm hiểu</span>
                        </button>
                    </div>

                </div>
            </div >
        </>
    )
}

export default BannerForHosting