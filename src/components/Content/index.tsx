import React from "react";

import { Container } from "./styles";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

export default function Content({ children }: Props) {
  return (
    <Container>
      <div>{children}</div>
    </Container>
  );
}
