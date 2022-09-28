import React from "react";

import {
  Container,
  ImagePreview,
  Title,
  SubTitle,
  Description,
  ReadMore,
} from "./styles";

interface ContentProps {
  img_url: string;
  title: string;
  subtitle: string;
  description: string;
}

const Content: React.FC<ContentProps> = ({
  img_url,
  title,
  subtitle,
  description,
}) => {
  return (
    <Container>
      <ImagePreview src={img_url} />
      <Title>{title}</Title>
      <div>
        <SubTitle>{subtitle}</SubTitle>
        <Description>{description}</Description>
      </div>
      <ReadMore>Read More</ReadMore>
    </Container>
  );
};

export default Content;
