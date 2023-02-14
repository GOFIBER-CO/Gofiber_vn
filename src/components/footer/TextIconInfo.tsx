import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  text: string;
  icon?: any;
  link?: string;
};

function TextIconInfo({ icon, text, link = "" }: Props) {
  return (
    <div className="text-icon-info d-flex align-items-start">
      <Image src={icon} alt={text} />
      {link ? (
        <p>
          <Link href={link} rel="nofollow noopener">
            {text}
          </Link>
        </p>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
}

export default TextIconInfo;
