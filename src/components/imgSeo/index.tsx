import React from "react";
import { ImageJsonLd } from "next-seo";

function ImageSeo({ imgSEO, children }) {
  return (
    <>
      <ImageJsonLd
        images={[
          {
            contentUrl: `${imgSEO}`,
            creator: {
              "@type": "Person",
              name: "Jane Doe",
            },
            creditText: "Jane Doe",
            copyrightNotice: "© Jane Doe",
            license: "http://www.example.com/license",
            acquireLicensePage: "http://www.example.com/acquire-license",
          },
        ]}
      />
      {children}
    </>
  );
}

export default ImageSeo;
