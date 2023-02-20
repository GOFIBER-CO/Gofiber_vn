import React, { CSSProperties } from "react";

type Props = {
  color?: "primary" | "white";
  name: string;
  styles?: any;
  className?: string;
  onClick?: (e: any) => any;
  stylesImage?: any;
  src?: any;
  type?: "button" | "submit";
};

function TextImageButton({
  color = "primary",
  name,
  styles = {},
  className = "",
  onClick = (e: any) => null,
  src = "",
  stylesImage = {},
  type = "button",
}: Props) {
  const _styles: CSSProperties = {
    ...styles,
  };

  const _stylesImage: CSSProperties = {
    ...stylesImage,
  };

  return (
    <button
      type={type}
      style={_styles}
      onClick={onClick}
      className={`${className} btn0 button_text_image button_text_image__${color}`}
    >
      {src && (
        <img style={_stylesImage} src={src} alt={name} width={50} height={50} />
      )}
      <span>{name}</span>
    </button>
  );
}

export default TextImageButton;
