import React from "react";
import Image from "next/future/image";
import BannerPic from "../../../public/image/bannerblog.png";
import { Container, Wrapper } from "./styles";

interface Props {
  title?: string;
  description?: string | null;
}

const Banner: React.FC<Props> = () => {
  return (
    <Container>
      <Image src={BannerPic} alt="Banner" />
      <Wrapper>
        <header>
          <h1>{"Bem vindo ao Zetsubou Blog"}</h1>
          <p>
            {
              "O maior overthink está aqui! Venha ao desespero, vamos nos desesperar e burrar juntos!"
            }
          </p>
        </header>
      </Wrapper>
    </Container>
  );
};

export default Banner;
