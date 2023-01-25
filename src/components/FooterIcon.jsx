import React from "react";
import Image from "react-bootstrap/Image";

export default function FooterIcon({icon}) {

  const {href, imageSource, altProperty} = icon

  return (
    <>
        <a className="mx-3" href={href} target="_blank" rel="noopener noreferrer">
          <Image
            src={imageSource}
            alt={altProperty}
            className="mr-3"
            width="30"
            height="30"
          />
        </a>
    </>
  );
}
