import React from "react";

import { Container } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <p>{`Copyright © ${new Date().getFullYear()} Thzinh`}</p>
    </Container>
  );
};

export default Footer;
