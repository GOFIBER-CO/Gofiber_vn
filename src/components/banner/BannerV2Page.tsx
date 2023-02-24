import Link from "next/link";
import React, { CSSProperties } from "react";

type Props = {
  image?: any;
  name?: string;
  styleLinkName?: CSSProperties;
  styleBannerLinkLarge?: CSSProperties;
  styleBannerLinkMedium?: CSSProperties;
  styleBannerLinkSmall?: CSSProperties;
  extra?: string;
};

function BannerV2Page({
  image,
  name,
  styleLinkName = {},
  extra = "",
  styleBannerLinkLarge = { minWidth: "30%" },
  styleBannerLinkMedium = { minWidth: "50%" },
  styleBannerLinkSmall = { minWidth: "90%" },
}: Props) {
  return (
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
              <img src={image} alt={name} width={600} height={500} />
            </div>
          </div>
          <div className="col col-12 col-md-5 mt-4 mt-md-0">
            <h1 className="title" style={styleLinkName}>
              {name}
            </h1>
            <p className="extra mt-4">{extra}</p>
            <div
              style={styleLinkName}
              className="link d-flex align-items-center justify-content-center mt-4"
            >
              <Link className="a" href="/">
                Trang chủ
              </Link>
              <a className="mx-2 a">{">"}</a>
              <a className="a name">{name}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerV2Page;
