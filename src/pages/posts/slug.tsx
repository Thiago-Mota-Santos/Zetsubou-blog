import React from "react";
import Image from "next/future/image";
import Logo from "../../../public/image/teste.jpg";
import {
  Container,
  ContentWrapper,
  MainContent,
  TitlePost,
  RightContainer,
  ImageContainer,
  ProfileIcon,
  ClockIcon,
} from "./slugstyle";
import RightContent from "../../components/RightContent";

const slug: React.FC = () => {
  return (
    <>
      <Container>
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
        {/* <Image src={Logo} alt={""} /> */}
        <ContentWrapper>
          {/* <TitlePost>
            <h1>
              <span>'What’s hidden in Studio La Cachette?'</span>
            </h1>
          </TitlePost> */}
          <MainContent>
            The short was very promising, and all its artists wanted to keep
            working together, but first they all felt that they needed to
            acquire some experience in the “real” animation industry. Their
            paths diverged for some time, but the experiences they gathered
            encouraged them to create their own place. First, Chheng was scouted
            for the Talent Development Program of studio Disney’s design
            division, which he happily joined. There, he attended the team’s
            “inspiration days”: each Friday, the artists would gather and watch
            everything that had come out in animation during the past week to
            look for animation. Chheng then realized that even those prestigious
            US-based artists were watching what was made in Europe, including
            graduation shorts such as his own. As for Bouacheria, he had also
            gone through the experience of working outside of France: just
            before The Royaume, in 2009, he got an internship at the Japanese
            anime studio Satelight thanks to fellow French animator Thomas
            Romain. There, he had the opportunity to do layout work on the
            series Basquash! wich welcomed many other French artists such as
            Romain himself, art director and designer Antoine Birot or animator
            Eddie Mehong. Bouacheria quickly realized he wouldn’t stay there for
            long: “I didn’t want to die doing what I love,” he said. Finally,
            Malassagne remained in France as an animator on some projects –
            including Ernest & Célestine in 2012 alongside Chheng – but he also
            looked outside of animation and started doing his own comics, such
            as Kairos, published by studio Ankama. During those years, the three
            of them kept seeing each other and shared the frustration of “just
            being cogs in a big machine.” It is out of that feeling that La
            Cachette was born, first as a small collective of freelance artists.
            During the panel, we also got the secret reason for the studio’s
            name – La Cachette, i.e., hiding place or hideout. One of
            Malassagne’s friends owned a small studio “hidden” somewhere in
            Paris, which he lent to the animators, who had to completely
            renovate it. In 2013, this small collective released their first
            work: Kairos, an animated trailer for Malassagne’s comic – which was
            just a passion project and wasn’t meant to promote an animated
            adaptation of the comic. They had zero money, and all the artists on
            it were friends who agreed to help out.
          </MainContent>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default slug;
