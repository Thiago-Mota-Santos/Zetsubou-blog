import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

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

interface postProps {
  title: string;
  name: string;
  date: string;
  image: string;
  previewContent: string;
  textContent: string;
}

const slug: React.FC<postProps> = ({
  title,
  name,
  date,
  image,
  previewContent,
  textContent,
}) => {
  return (
    <>
      <Container>
        <ContentWrapper>
          <TitlePost>
            <h1>{title}</h1>
            <ul>
              <li>
                <ProfileIcon />
                <span>{name}</span>
              </li>
              <li>
                <ClockIcon />
                <span>{date}</span>
              </li>
            </ul>
          </TitlePost>
          <ImageContainer>
            <img src={image} alt={"Image-post"} />
          </ImageContainer>
          <MainContent>
            <Preview>{previewContent}</Preview>
            <hr />

            <ReactMarkdown rehypePlugins={[rehypeRaw]} children={textContent} />
          </MainContent>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default slug;
