import TextIconButton from "@/src/components/button/TextIconButton";
import TitleWithLine from "@/src/components/TitleWithLine";
import Image from "next/image";
import React, { useState } from "react";

const data = [
  {
    id: "1",
    name: "Thiết kế website",
  },
  {
    id: "2",
    name: "Web Hosting",
  },
  {
    id: "3",
    name: "Thuê VPS",
  },
  {
    id: "4",
    name: "SSL",
  },
  {
    id: "5",
    name: "Thuê máy chủ vật lý",
  },
  {
    id: "6",
    name: "Thuê chỗ đặt máy chủ",
  },
  {
    id: "8",
    name: "Khác",
  },
];

type DataType = {
  id: string;
  name: string;
};

type Props = {
  showTitle?: boolean;
};

function Contact({ showTitle = true }: Props) {
  const [dataSelected, setDataSelected] = useState<Array<DataType>>([data[0]]);

  const selected = (id: string) => {
    const isSelected = dataSelected.find((item) => item.id === id);

    return isSelected ? "selected" : "";
  };

  const onChoose = (item: DataType) => {
    const isExist = dataSelected.find((e) => e?.id === item?.id);

    if (isExist)
      setDataSelected((prevState) => {
        return prevState.filter((e) => e?.id !== item?.id);
      });
    else
      setDataSelected((prevState) => {
        return [...prevState, item];
      });
  };

  return (
    <section className="section-contact">
      <div className="section-content position-relative">
        {showTitle && (
          <div className="row justify-content-center">
            <div className="col col-12 col-md-6 col-lg-4">
              <TitleWithLine title="BẠN QUAN TÂM GÌ ĐẾN DỊCH VỤ CỦA CHÚNG TÔI" />
            </div>
          </div>
        )}
        <div className="row justify-content-center" >
          <div className="col col-12 col-md-10 col-lg-8" style={{ maxWidth: "883px" }}>
            <form className="contact_form">
              <div className="row justify-content-center">
                <div className="col-12 col-md-10">
                  <div className="img text-center">
                    <Image
                      className="logo"
                      src={require("@/public/images/logo.png")}
                      alt="Logo"
                    />
                  </div>
                  <div className="mx-2 font_size_20 font_weight_500">
                    Bạn cần
                  </div>
                  <div className="category_list d-flex align-items-center flex-wrap">
                    {data.map((item) => (
                      <div
                        className={`category_item ${selected(item?.id)}`}
                        key={item.id}
                      >
                        <button
                          onClick={() => onChoose(item)}
                          type="button"
                          className="btn0 py-2 px-3 py-lg-3 px-lg-4"
                        >
                          {item.name}
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="row mt-4">
                    <div className="col-12 col-md-12 mt-4  px-2">
                      <input placeholder="Tên của bạn" />
                    </div>
                    <div className="col-12 col-md-12 mt-4  px-2">
                      <input placeholder="Email của bạn" />
                    </div>
                    <div className="col-12 col-md-12 mt-4 px-2">
                      <input placeholder="Số điện thoại" />
                    </div>

                  </div>
                  <div className="text-center mt-4">
                    <TextIconButton
                      className="mt-4"
                      name="Gửi ngay"
                      color="primary"
                      type="submit"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
