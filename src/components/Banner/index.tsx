import React from "react";
import Image from "next/future/image";
import BannerPic from "../../../public/image/bannerblog.png";
import { Container, Wrapper } from "./styles";

interface Props {
  title?: string;
  description?: string | null;
}

const Banner: React.FC<Props> = ({ title, description }) => {
  return (
    <Container>
      <Image src={BannerPic} alt="Banner" />
      <Wrapper>
        <header>
          <h1>{title}</h1>
          <p>{description}</p>
        </header>
      </Wrapper>
    </Container>
  );
};

export default Banner;
