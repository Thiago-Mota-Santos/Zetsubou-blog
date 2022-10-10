import React from "react";
import Image from "next/future/image";
import Logo from "../../../public/image/teste.jpg";
import {
  Container,
  ContentWrapper,
  MainContent,
  TitlePost,
  ImageContainer,
  ProfileIcon,
  ClockIcon,
  Preview,
} from "./styles";
import RightContent from "../../components/RightContent";

const slug: React.FC = () => {
  return (
    <>
      <Container>
        <ContentWrapper>
          <TitlePost>
            <h1>'What’s hidden in Studio La Cachette?'</h1>
            <ul>
              <li>
                <ProfileIcon />
                <span>Thzinh</span>
              </li>
              <li>
                <ClockIcon />
                <span>AUG 30, 2021</span>
              </li>
            </ul>
          </TitlePost>
          <ImageContainer>
            <Image src={Logo} alt={""} />
          </ImageContainer>
          <MainContent>
            <Preview>
              Masaaki Yuasa’s Tatami Galaxy stood as a one-of-a-kind
              masterpiece, so how is Time Machine Blues perfectly recreating its
              charm 12 years later and under a different director? This is how
              context does (and doesn’t) affect the creation of such unique
              anime.
            </Preview>
            <hr />
            an animated trailer for Malassagne’s comic – which was just a
            passion project and wasn’t meant to promote an animated adaptation
            of the comic. They had zero money, and all the artists on it were
            friends who agreed to help out. an animated trailer for Malassagne’s
            comic – which was just a passion project and wasn’t meant to
            promote. an animated adaptation of the comic. They had zero money,
            and all the artists on it were friends who agreed to help out. an
            animated trailer for Malassagne’s comic – which was just a passion
            project and wasn’t meant to promote an animated adaptation of the
            comic. They had zero money, and all the artists on it were friends
            who agreed to help out.
          </MainContent>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default slug;
