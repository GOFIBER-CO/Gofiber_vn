import React, { CSSProperties } from "react";

type Props = {
  color?: string;
  className?: string;
  styles?: any;
};

function Divider({ className = "", color = "#fafafa", styles }: Props) {
  const _styles: CSSProperties = {
    borderTop: `1px solid ${color}`,
    ...styles,
  };

  return <div className={`c-divider ${className}`} style={_styles}></div>;
}

export default Divider;
