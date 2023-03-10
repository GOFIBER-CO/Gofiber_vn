import TextIconButton from "@/src/components/button/TextIconButton";
import { useAppDispatch } from "@/src/redux";
import { updateBuyPackage } from "@/src/redux/slice";
import { formatNumber, ICON, ICON_IMAGE } from "@/src/utils";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

type Props = {
    item?: any;
    showMore?: any;
    itemShowMore?: any;
    NVMe?: any;
    wordPress?: any
    isNVMe?: any
};



function BannerItem({ item, showMore, itemShowMore, NVMe, wordPress, isNVMe }: Props) {
    const dispatch = useAppDispatch();
    const handleShowMore = () => {
        if (itemShowMore.id === item.id) {

            showMore({ id: 0, forBanner: 0 })
        } else {
            showMore({ id: item.id, forBanner: isNVMe })
        }
    }
    const handleChooseProduct = (item: any) => {

        dispatch(
            updateBuyPackage({
                count: 1,
                item,
            })
        );
    };

    return (<>

        <div className="col col-12 col-md-6 col-lg-4 py-2 px-2 px-xl-4 mt-4">
            <div className="hot-product-item1 n">
                <div className="hot-product-item-wrapper1 position-relative ">
                    <div className="title mt-5 mx-auto">{item.name}</div>
                    <ul>


                        <div className="price">{formatNumber(item.price)} VND / Tháng</div>
                        <div className="extra" ><svg className="mx-2" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.2635 11.175C5.13017 11.175 5.00517 11.154 4.8885 11.112C4.77183 11.0707 4.6635 11 4.5635 10.9L0.263502 6.6C0.0801684 6.41667 -0.00749826 6.179 0.000501742 5.887C0.00916841 5.59567 0.105168 5.35833 0.288501 5.175C0.471835 4.99167 0.705168 4.9 0.988502 4.9C1.27183 4.9 1.50517 4.99167 1.6885 5.175L5.2635 8.75L13.7385 0.275C13.9218 0.0916668 14.1595 0 14.4515 0C14.7428 0 14.9802 0.0916668 15.1635 0.275C15.3468 0.458333 15.4385 0.695667 15.4385 0.987C15.4385 1.279 15.3468 1.51667 15.1635 1.7L5.9635 10.9C5.8635 11 5.75517 11.0707 5.6385 11.112C5.52183 11.154 5.39683 11.175 5.2635 11.175Z" fill="#27AE60" />
                        </svg>
                            <strong>

                                {item.ssdSize}
                            </strong>
                            {NVMe !== true ? " Dung Lượng SSD" : " Dung Lượng SSD NVMe"}

                        </div>
                        <div className="extra" ><svg className="mx-2" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.2635 11.175C5.13017 11.175 5.00517 11.154 4.8885 11.112C4.77183 11.0707 4.6635 11 4.5635 10.9L0.263502 6.6C0.0801684 6.41667 -0.00749826 6.179 0.000501742 5.887C0.00916841 5.59567 0.105168 5.35833 0.288501 5.175C0.471835 4.99167 0.705168 4.9 0.988502 4.9C1.27183 4.9 1.50517 4.99167 1.6885 5.175L5.2635 8.75L13.7385 0.275C13.9218 0.0916668 14.1595 0 14.4515 0C14.7428 0 14.9802 0.0916668 15.1635 0.275C15.3468 0.458333 15.4385 0.695667 15.4385 0.987C15.4385 1.279 15.3468 1.51667 15.1635 1.7L5.9635 10.9C5.8635 11 5.75517 11.0707 5.6385 11.112C5.52183 11.154 5.39683 11.175 5.2635 11.175Z" fill="#27AE60" />
                        </svg>
                            <strong>

                                {item.ramSize}
                            </strong>
                            {" RAM"}
                        </div>
                        <div className="extra" ><svg className="mx-2" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.2635 11.175C5.13017 11.175 5.00517 11.154 4.8885 11.112C4.77183 11.0707 4.6635 11 4.5635 10.9L0.263502 6.6C0.0801684 6.41667 -0.00749826 6.179 0.000501742 5.887C0.00916841 5.59567 0.105168 5.35833 0.288501 5.175C0.471835 4.99167 0.705168 4.9 0.988502 4.9C1.27183 4.9 1.50517 4.99167 1.6885 5.175L5.2635 8.75L13.7385 0.275C13.9218 0.0916668 14.1595 0 14.4515 0C14.7428 0 14.9802 0.0916668 15.1635 0.275C15.3468 0.458333 15.4385 0.695667 15.4385 0.987C15.4385 1.279 15.3468 1.51667 15.1635 1.7L5.9635 10.9C5.8635 11 5.75517 11.0707 5.6385 11.112C5.52183 11.154 5.39683 11.175 5.2635 11.175Z" fill="#27AE60" />
                        </svg>
                            <strong>

                                {item.addonDomain}
                            </strong>
                            {" Addon Domain"}
                        </div>
                        {item.cpuCore &&
                            <div className="extra" ><svg className="mx-2" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.2635 11.175C5.13017 11.175 5.00517 11.154 4.8885 11.112C4.77183 11.0707 4.6635 11 4.5635 10.9L0.263502 6.6C0.0801684 6.41667 -0.00749826 6.179 0.000501742 5.887C0.00916841 5.59567 0.105168 5.35833 0.288501 5.175C0.471835 4.99167 0.705168 4.9 0.988502 4.9C1.27183 4.9 1.50517 4.99167 1.6885 5.175L5.2635 8.75L13.7385 0.275C13.9218 0.0916668 14.1595 0 14.4515 0C14.7428 0 14.9802 0.0916668 15.1635 0.275C15.3468 0.458333 15.4385 0.695667 15.4385 0.987C15.4385 1.279 15.3468 1.51667 15.1635 1.7L5.9635 10.9C5.8635 11 5.75517 11.0707 5.6385 11.112C5.52183 11.154 5.39683 11.175 5.2635 11.175Z" fill="#27AE60" />
                            </svg>
                                <strong>

                                    {item.cpuCore}
                                </strong>
                                {" CPU core"}
                            </div>
                        }
                        {item.iPClassC &&
                            <div className="extra" ><svg className="mx-2" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.2635 11.175C5.13017 11.175 5.00517 11.154 4.8885 11.112C4.77183 11.0707 4.6635 11 4.5635 10.9L0.263502 6.6C0.0801684 6.41667 -0.00749826 6.179 0.000501742 5.887C0.00916841 5.59567 0.105168 5.35833 0.288501 5.175C0.471835 4.99167 0.705168 4.9 0.988502 4.9C1.27183 4.9 1.50517 4.99167 1.6885 5.175L5.2635 8.75L13.7385 0.275C13.9218 0.0916668 14.1595 0 14.4515 0C14.7428 0 14.9802 0.0916668 15.1635 0.275C15.3468 0.458333 15.4385 0.695667 15.4385 0.987C15.4385 1.279 15.3468 1.51667 15.1635 1.7L5.9635 10.9C5.8635 11 5.75517 11.0707 5.6385 11.112C5.52183 11.154 5.39683 11.175 5.2635 11.175Z" fill="#27AE60" />
                            </svg>
                                <strong>

                                    {item.iPClassC}
                                </strong>
                                {" IP Class C"}
                            </div>
                        }
                        <div className={`extra ${(itemShowMore.id !== item.id) ? "d-none" : undefined}`} ><svg className="mx-2" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.2635 11.175C5.13017 11.175 5.00517 11.154 4.8885 11.112C4.77183 11.0707 4.6635 11 4.5635 10.9L0.263502 6.6C0.0801684 6.41667 -0.00749826 6.179 0.000501742 5.887C0.00916841 5.59567 0.105168 5.35833 0.288501 5.175C0.471835 4.99167 0.705168 4.9 0.988502 4.9C1.27183 4.9 1.50517 4.99167 1.6885 5.175L5.2635 8.75L13.7385 0.275C13.9218 0.0916668 14.1595 0 14.4515 0C14.7428 0 14.9802 0.0916668 15.1635 0.275C15.3468 0.458333 15.4385 0.695667 15.4385 0.987C15.4385 1.279 15.3468 1.51667 15.1635 1.7L5.9635 10.9C5.8635 11 5.75517 11.0707 5.6385 11.112C5.52183 11.154 5.39683 11.175 5.2635 11.175Z" fill="#27AE60" />
                        </svg>
                            {item.inodes}</div>



                        <div className={`extra ${itemShowMore.id !== item.id ? "d-none" : undefined}`} ><svg className="mx-2" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.2635 11.175C5.13017 11.175 5.00517 11.154 4.8885 11.112C4.77183 11.0707 4.6635 11 4.5635 10.9L0.263502 6.6C0.0801684 6.41667 -0.00749826 6.179 0.000501742 5.887C0.00916841 5.59567 0.105168 5.35833 0.288501 5.175C0.471835 4.99167 0.705168 4.9 0.988502 4.9C1.27183 4.9 1.50517 4.99167 1.6885 5.175L5.2635 8.75L13.7385 0.275C13.9218 0.0916668 14.1595 0 14.4515 0C14.7428 0 14.9802 0.0916668 15.1635 0.275C15.3468 0.458333 15.4385 0.695667 15.4385 0.987C15.4385 1.279 15.3468 1.51667 15.1635 1.7L5.9635 10.9C5.8635 11 5.75517 11.0707 5.6385 11.112C5.52183 11.154 5.39683 11.175 5.2635 11.175Z" fill="#27AE60" />
                        </svg>
                            {item.subdomain}</div>
                        <div className={`extra ${itemShowMore.id !== item.id ? "d-none" : undefined}`} ><svg className="mx-2" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.2635 11.175C5.13017 11.175 5.00517 11.154 4.8885 11.112C4.77183 11.0707 4.6635 11 4.5635 10.9L0.263502 6.6C0.0801684 6.41667 -0.00749826 6.179 0.000501742 5.887C0.00916841 5.59567 0.105168 5.35833 0.288501 5.175C0.471835 4.99167 0.705168 4.9 0.988502 4.9C1.27183 4.9 1.50517 4.99167 1.6885 5.175L5.2635 8.75L13.7385 0.275C13.9218 0.0916668 14.1595 0 14.4515 0C14.7428 0 14.9802 0.0916668 15.1635 0.275C15.3468 0.458333 15.4385 0.695667 15.4385 0.987C15.4385 1.279 15.3468 1.51667 15.1635 1.7L5.9635 10.9C5.8635 11 5.75517 11.0707 5.6385 11.112C5.52183 11.154 5.39683 11.175 5.2635 11.175Z" fill="#27AE60" />
                        </svg>
                            {item.database}</div>
                        <div className={`extra ${itemShowMore.id !== item.id ? "d-none" : undefined}`} ><svg className="mx-2" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.2635 11.175C5.13017 11.175 5.00517 11.154 4.8885 11.112C4.77183 11.0707 4.6635 11 4.5635 10.9L0.263502 6.6C0.0801684 6.41667 -0.00749826 6.179 0.000501742 5.887C0.00916841 5.59567 0.105168 5.35833 0.288501 5.175C0.471835 4.99167 0.705168 4.9 0.988502 4.9C1.27183 4.9 1.50517 4.99167 1.6885 5.175L5.2635 8.75L13.7385 0.275C13.9218 0.0916668 14.1595 0 14.4515 0C14.7428 0 14.9802 0.0916668 15.1635 0.275C15.3468 0.458333 15.4385 0.695667 15.4385 0.987C15.4385 1.279 15.3468 1.51667 15.1635 1.7L5.9635 10.9C5.8635 11 5.75517 11.0707 5.6385 11.112C5.52183 11.154 5.39683 11.175 5.2635 11.175Z" fill="#27AE60" />
                        </svg>
                            <strong>

                                {item.diskIO}
                            </strong>
                            {" Disk I/O "}
                        </div>
                        <div className={`extra ${itemShowMore.id !== item.id ? "d-none" : undefined}`} ><svg className="mx-2" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.2635 11.175C5.13017 11.175 5.00517 11.154 4.8885 11.112C4.77183 11.0707 4.6635 11 4.5635 10.9L0.263502 6.6C0.0801684 6.41667 -0.00749826 6.179 0.000501742 5.887C0.00916841 5.59567 0.105168 5.35833 0.288501 5.175C0.471835 4.99167 0.705168 4.9 0.988502 4.9C1.27183 4.9 1.50517 4.99167 1.6885 5.175L5.2635 8.75L13.7385 0.275C13.9218 0.0916668 14.1595 0 14.4515 0C14.7428 0 14.9802 0.0916668 15.1635 0.275C15.3468 0.458333 15.4385 0.695667 15.4385 0.987C15.4385 1.279 15.3468 1.51667 15.1635 1.7L5.9635 10.9C5.8635 11 5.75517 11.0707 5.6385 11.112C5.52183 11.154 5.39683 11.175 5.2635 11.175Z" fill="#27AE60" />
                        </svg>
                            {item.worldPress}</div>
                        <div className={`extra ${(itemShowMore.id !== item.id) ? "d-none" : undefined}`} ><svg className="mx-2" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.2635 11.175C5.13017 11.175 5.00517 11.154 4.8885 11.112C4.77183 11.0707 4.6635 11 4.5635 10.9L0.263502 6.6C0.0801684 6.41667 -0.00749826 6.179 0.000501742 5.887C0.00916841 5.59567 0.105168 5.35833 0.288501 5.175C0.471835 4.99167 0.705168 4.9 0.988502 4.9C1.27183 4.9 1.50517 4.99167 1.6885 5.175L5.2635 8.75L13.7385 0.275C13.9218 0.0916668 14.1595 0 14.4515 0C14.7428 0 14.9802 0.0916668 15.1635 0.275C15.3468 0.458333 15.4385 0.695667 15.4385 0.987C15.4385 1.279 15.3468 1.51667 15.1635 1.7L5.9635 10.9C5.8635 11 5.75517 11.0707 5.6385 11.112C5.52183 11.154 5.39683 11.175 5.2635 11.175Z" fill="#27AE60" />
                        </svg>
                            {item.ssl}</div>
                        {item.cpanel &&
                            <div className={`extra ${itemShowMore.id !== item.id ? "d-none" : undefined}`} ><svg className="mx-2" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.2635 11.175C5.13017 11.175 5.00517 11.154 4.8885 11.112C4.77183 11.0707 4.6635 11 4.5635 10.9L0.263502 6.6C0.0801684 6.41667 -0.00749826 6.179 0.000501742 5.887C0.00916841 5.59567 0.105168 5.35833 0.288501 5.175C0.471835 4.99167 0.705168 4.9 0.988502 4.9C1.27183 4.9 1.50517 4.99167 1.6885 5.175L5.2635 8.75L13.7385 0.275C13.9218 0.0916668 14.1595 0 14.4515 0C14.7428 0 14.9802 0.0916668 15.1635 0.275C15.3468 0.458333 15.4385 0.695667 15.4385 0.987C15.4385 1.279 15.3468 1.51667 15.1635 1.7L5.9635 10.9C5.8635 11 5.75517 11.0707 5.6385 11.112C5.52183 11.154 5.39683 11.175 5.2635 11.175Z" fill="#27AE60" />
                            </svg>
                                {item.cpanel}</div>}
                        {item.Enterprise &&
                            <div className={`extra ${itemShowMore.id !== item.id ? "d-none" : undefined}`} ><svg className="mx-2" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.2635 11.175C5.13017 11.175 5.00517 11.154 4.8885 11.112C4.77183 11.0707 4.6635 11 4.5635 10.9L0.263502 6.6C0.0801684 6.41667 -0.00749826 6.179 0.000501742 5.887C0.00916841 5.59567 0.105168 5.35833 0.288501 5.175C0.471835 4.99167 0.705168 4.9 0.988502 4.9C1.27183 4.9 1.50517 4.99167 1.6885 5.175L5.2635 8.75L13.7385 0.275C13.9218 0.0916668 14.1595 0 14.4515 0C14.7428 0 14.9802 0.0916668 15.1635 0.275C15.3468 0.458333 15.4385 0.695667 15.4385 0.987C15.4385 1.279 15.3468 1.51667 15.1635 1.7L5.9635 10.9C5.8635 11 5.75517 11.0707 5.6385 11.112C5.52183 11.154 5.39683 11.175 5.2635 11.175Z" fill="#27AE60" />
                            </svg>
                                {item.Enterprise}</div>}
                    </ul>

                    <div className="textShowMore mx-auto" onClick={() => handleShowMore()}>
                        {itemShowMore.id !== item.id ? <>
                            <svg className="mx-2 " width="20" height="30" viewBox="0 0 6 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.41311 1.19273L3.99978 3.77939L6.58645 1.19273C6.64817 1.13101 6.72144 1.08205 6.80208 1.04864C6.88273 1.01524 6.96916 0.998047 7.05645 0.998047C7.14373 0.998047 7.23017 1.01524 7.31081 1.04864C7.39145 1.08205 7.46473 1.13101 7.52645 1.19273C7.58817 1.25445 7.63713 1.32772 7.67053 1.40837C7.70393 1.48901 7.72113 1.57544 7.72113 1.66273C7.72113 1.75001 7.70393 1.83645 7.67053 1.91709C7.63713 1.99773 7.58817 2.07101 7.52645 2.13273L4.46645 5.19273C4.40477 5.25453 4.33151 5.30356 4.25086 5.33702C4.17021 5.37047 4.08376 5.38769 3.99645 5.38769C3.90913 5.38769 3.82268 5.37047 3.74203 5.33702C3.66138 5.30356 3.58812 5.25453 3.52645 5.19273L0.466447 2.13273C0.404645 2.07105 0.355613 1.99779 0.322158 1.91714C0.288704 1.83649 0.271484 1.75004 0.271484 1.66273C0.271484 1.57542 0.288704 1.48896 0.322158 1.40831C0.355613 1.32766 0.404645 1.2544 0.466447 1.19273C0.726447 0.939394 1.15311 0.932727 1.41311 1.19273Z" fill="url(#paint0_linear_2059_32592)" />
                                <defs>
                                    <linearGradient id="paint0_linear_2059_32592" x1="0.680013" y1="1.54675" x2="7.79774" y2="2.00637" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#00ACD7" />
                                        <stop offset="1" stop-color="#005CC9" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <p>Xem thêm tính năng</p>
                        </>
                            : <>
                                <svg width="20" height="30" viewBox="0 0 6 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.58689 4.80727L4.00022 2.22061L1.41355 4.80727C1.35183 4.86899 1.27856 4.91795 1.19792 4.95136C1.11727 4.98476 1.03084 5.00195 0.943554 5.00195C0.856267 5.00195 0.769835 4.98476 0.689192 4.95136C0.608549 4.91795 0.535274 4.86899 0.473553 4.80727C0.411832 4.74555 0.362873 4.67228 0.32947 4.59163C0.296066 4.51099 0.278874 4.42456 0.278874 4.33727C0.278874 4.24998 0.296066 4.16355 0.32947 4.08291C0.362873 4.00227 0.411832 3.92899 0.473553 3.86727L3.53355 0.807273C3.59523 0.74547 3.66849 0.696438 3.74914 0.662984C3.82979 0.62953 3.91624 0.61231 4.00355 0.61231C4.09087 0.61231 4.17732 0.62953 4.25797 0.662984C4.33862 0.696438 4.41188 0.74547 4.47355 0.807273L7.53355 3.86727C7.59536 3.92895 7.64439 4.00221 7.67784 4.08286C7.7113 4.16351 7.72852 4.24996 7.72852 4.33727C7.72852 4.42458 7.7113 4.51104 7.67784 4.59169C7.64439 4.67234 7.59536 4.7456 7.53355 4.80727C7.27355 5.06061 6.84689 5.06727 6.58689 4.80727Z" fill="url(#paint0_linear_2326_20431)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_2326_20431" x1="7.31999" y1="4.45325" x2="0.202258" y2="3.99363" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00ACD7" />
                                            <stop offset="1" stop-color="#005CC9" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <p>Thu gon</p>
                            </>
                        }
                    </div>
                    <div style={{ marginTop: "50px" }} className="mx-auto pb-5" >
                        <Link
                            className="a"
                            onClick={() => handleChooseProduct(item)}
                            href={item?.link}
                        >
                            <TextIconButton
                                className="btn-primary-to-white  btn0 button_text_icon "
                                name="Dùng Thử"
                                styles={{ boxShadow: "none" }}
                            />
                        </Link>
                    </div>
                </div>



            </div>



        </div >
    </>
    );
}

export default BannerItem;