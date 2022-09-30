import React from "react";

import { Container, ImagePreview, Title, ReadMore } from "./styles";

interface CardProps {
  img_url: string;
  title: string;
  subtitle: string;
  description: string;
}

const Card: React.FC<CardProps> = ({
  img_url,
  title,
  subtitle,
  description,
}) => {
  return (
    <Container>
      <ImagePreview src={img_url} alt={title} />
      <Title>{title}</Title>
      <header>
        <p>{subtitle}</p>
        <p>{description}</p>
        <ReadMore>Read More</ReadMore>
      </header>
    </Container>
  );
};

export default Card;
