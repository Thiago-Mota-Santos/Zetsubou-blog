import Link from "next/link";
import React from "react";

import { Container, ImagePreview, Title, ReadMore } from "./styles";

interface CardProps {
  img_url: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
}

const Card: React.FC<CardProps> = ({
  img_url,
  title,
  subtitle,
  description,
  href,
}) => {
  return (
    <Container>
      <ImagePreview src={img_url} alt={title} />
      <Title>{title}</Title>
      <header>
        <p>{subtitle}</p>
        <p>{description}</p>
        <Link href={href}>
          <ReadMore>Read More</ReadMore>
        </Link>
      </header>
    </Container>
  );
};

export default Card;
