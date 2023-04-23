/* eslint react/prop-types: 0 */

import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Image from "next/image";
import {
  Container,
  ContentWrapper,
  MainContent,
  TitlePost,
  ImageContainer,
  ProfileIcon,
  ClockIcon,
  Preview,
  QuoteLeft,
  QuoteRight,
} from "./styles";

interface postProps {
  title: string;
  name: string;
  date: string;
  image: string;
  previewContent: string;
  textContent: string;
}

const BlockQuote = ({ children }) => {
  return (
    <blockquote>
      <p>
        <QuoteLeft />
        {children}
        <QuoteRight />
      </p>
    </blockquote>
  );
};

const component = {
  blockquote: BlockQuote,
};

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
            <Image src={image} width={1400} height={600} alt={"Image-post"} />
          </ImageContainer>
          <MainContent>
            <Preview>{previewContent}</Preview>
            <hr />

            <ReactMarkdown
              // eslint-disable-next-line
              children={textContent}
              rehypePlugins={[rehypeRaw]}
              components={component}
            ></ReactMarkdown>
          </MainContent>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default slug;
