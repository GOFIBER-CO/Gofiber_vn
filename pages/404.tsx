import TextIconButton from "@/src/components/button/TextIconButton";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="container">
      <section id="not-found-page">
        <div className="img d-flex justify-content-center">
          <img
            src="https://gofiber.b-cdn.net/not-found.png"
            width={500}
            height={500}
            alt="Not-found"
          />
        </div>
        <div className="mt-4">
          <Link className="a" href={"/"}>
            <TextIconButton
              name="Quay về trang chủ"
              className="mt-4"
              styles={{ width: "200px" }}
            />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
