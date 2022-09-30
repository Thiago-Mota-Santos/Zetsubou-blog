import React from "react";
import Image from "next/future/image";
import BannerPic from "../../../public/image/bannerblog.png";
import Test from "../../../public/image/teste.jpg";
import { Container, Wrapper } from "./styles";

const Banner: React.FC = () => {
  return (
    <Container>
      <Image src={BannerPic} alt="Banner" />
      <Wrapper>
        <header>
          <h1>Zetsubou Blog</h1>
          <p>
            Sakuga Espresso is our column about appreciating great animation in
            a format short enough to be read along with a shot of Espresso. ☕️
            What makes a scene stand out? How do the drawings convey emotions?
            Join us as we breakdown what makes stunning animation....
          </p>
        </header>
      </Wrapper>
    </Container>
  );
};

export default Banner;
