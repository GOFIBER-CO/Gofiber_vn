import React from "react";

type Props = {
  title: string;
  extra: string;
  image: string;
  onClick?: () => void;
};

function SearchItem({ extra, image, title, onClick = () => null }: Props) {
  return (
    <div className="result-search-item">
      <div>
        <img src={image} alt={title} width={64} height={72} />
      </div>
      <div className="info">
        <div className="title">{title}</div>
        <div className="extra">{extra}</div>
      </div>
    </div>
  );
}

export default SearchItem;
