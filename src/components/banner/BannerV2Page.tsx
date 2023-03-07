import Link from "next/link";
import React, { CSSProperties, useEffect, useState } from "react";
import TextIconButton from "../button/TextIconButton";

type Props = {
  image?: any;
  imageDesktop?: any;
  imageTablet?: any;
  imageSmall?: any;

  name?: string;
  styleLinkName?: CSSProperties;
  styleBannerLinkLarge?: CSSProperties;
  styleBannerLinkMedium?: CSSProperties;
  styleBannerLinkSmall?: CSSProperties;
  extra?: string;
  extra1?: string;
  data?: any;
  divImport?: any;
};
// Change Image Responsive
function BannerV2Page({
  image,
  imageDesktop,
  imageTablet,
  imageSmall,
  name,
  styleLinkName = {},
  extra = "",
  extra1 = "",
  data = "",
  divImport = "",
  styleBannerLinkLarge = { minWidth: "30%" },
  styleBannerLinkMedium = { minWidth: "50%" },
  styleBannerLinkSmall = { minWidth: "90%" },
}: Props) {
  const [Image, setImage] = useState(image)
  const [windowWidth, setWindowWidth] = useState<Number>(0)
  const [heightOfDiv, setHeighOfDiv] = useState<String>("")
  // Change image by responsive
  useEffect(() => {
    const handleResize = () => {

      setWindowWidth(window.innerWidth)
      if (window.innerWidth >= 1440 && imageDesktop !== undefined) {
        setImage(imageDesktop)
        setHeighOfDiv("135px")
      } else if (window.innerWidth > 768 && window.innerWidth < 1439 && imageTablet !== undefined) {
        setImage(imageTablet)
        setHeighOfDiv("195px")

      } else if (window.innerWidth < 768 && imageSmall !== undefined) {
        setImage(imageSmall)
        setHeighOfDiv("335px")

      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)

  }, []);
  return (<>
    <section id="section-banner-v2">
      {/* <div className="wrapper-banner large hide-for-medium">
        <div className="container">
          <div className="banner-v2">
            <div
              className="banner-image large"
              style={{ backgroundImage: `url(${image?.large})` }}
            >
              <div className="banner-layer">
                <div className="banner-link large" style={styleBannerLinkLarge}>
                  <h1 style={styleLinkName}>{name}</h1>
                  <p className="extra mt-4">{extra}</p>
                  <div className="link d-flex align-items-center justify-content-center mt-4">
                    <Link className="a" href="/">
                      Trang chủ
                    </Link>
                    <a className="mx-2 a">{">"}</a>
                    <a className="a name">{name}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper-banner medium show-for-medium hide-for-small">
        <div className="banner-v2">
          <div
            className="banner-image medium"
            style={{ backgroundImage: `url(${image?.medium})` }}
          >
            <div className="banner-layer">
              <div className="banner-link medium" style={styleBannerLinkMedium}>
                <h1 style={styleLinkName}>{name}</h1>
                <p className="extra mt-4">{extra}</p>
                <div className="link d-flex align-items-center justify-content-center mt-4">
                  <Link className="a" href="/">
                    Trang chủ
                  </Link>
                  <a className="mx-2 a">{">"}</a>
                  <a className="a name">{name}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper-banner small show-for-small">
        <div className="banner-v2">
          <div
            className="banner-image small"
            style={{ backgroundImage: `url(${image?.small})` }}
          >
            <div className="banner-layer">
              <div className="banner-link small" style={styleBannerLinkSmall}>
                <h1 style={styleLinkName}>{name}</h1>
                <p className="extra mt-4">{extra}</p>
                <div className="link d-flex align-items-center justify-content-center mt-4">
                  <Link className="a" href="/">
                    Trang chủ
                  </Link>
                  <a className="mx-2 a">{">"}</a>
                  <a className="a name">{name}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="row banner-v2 align-items-center flex-row-reverse">
          <div className="col col-12 col-md-7">
            <div className="d-flex align-items-center justify-content-md-end">
              <img src={Image} alt={name} width={600} height={500} />
            </div>
          </div>
          <div className="col col-12 col-md-5 mt-4 mt-md-0">
            <h1 className="title" style={styleLinkName}>
              {name}
            </h1>
            <p className="extra mt-4" >{extra}</p>
            <p className="extra mt-4 ">{extra1}</p>

            <TextIconButton
              className="btn-white-to-primary"
              name="Đăng ký dùng thử"
              styles={{ boxShadow: "none", background: "white", color: "#00ACD7", width: "208px" }}
            />
          </div>

        </div>{
          divImport === "true" ? <>
            <div style={{
              backgroundColor: `linear-gradient(92.18deg, #00ACD7 5.74%, #005CC9 98.17%);
        `, height: `${heightOfDiv}`, backgroundImage: `url("https://gofiber.b-cdn.net/new-design/element1/element1.png")`
            }}
            >
              <div className="container">
                <div className="row">
                  {data.map((item: any) => (<>
                    <div className="mb-lg-5 mb-3 mb-tb-4 col-lg-4 col-sm-6 text-white">

                      <svg width="16" height="12" style={{ marginRight: "5px" }} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.55061 11.5754C5.41728 11.5754 5.29228 11.5544 5.17561 11.5124C5.05894 11.4704 4.95061 11.3997 4.85061 11.3004L0.550611 7.00039C0.367278 6.81706 0.279611 6.57939 0.287611 6.28739C0.295611 5.99539 0.391611 5.75806 0.575611 5.57539C0.758944 5.39206 0.992278 5.30039 1.27561 5.30039C1.55894 5.30039 1.79228 5.39206 1.97561 5.57539L5.55061 9.15039L14.0256 0.675391C14.2089 0.492057 14.4466 0.400391 14.7386 0.400391C15.0306 0.400391 15.2679 0.492057 15.4506 0.675391C15.6339 0.858724 15.7256 1.09639 15.7256 1.38839C15.7256 1.68039 15.6339 1.91772 15.4506 2.10039L6.25061 11.3004C6.15061 11.4004 6.04228 11.4714 5.92561 11.5134C5.80894 11.5554 5.68394 11.5761 5.55061 11.5754Z" fill="#FAFAFA" />
                      </svg>

                      {item}
                    </div >
                  </>

                  ))}

                </div>
              </div>

            </div>
          </> : null
        }

      </div>

    </section >
  </>

  );
}

export default BannerV2Page;
