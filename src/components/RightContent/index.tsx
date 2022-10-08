import React from "react";

import { Container, Box, TopFictionList, Title } from "./styles";

const RightContent: React.FC = () => {
  return (
    <Container>
      <TopFictionList>
        <Title>
          <span>TOP 5 OBRAS</span>
        </Title>
        <Box>
          <ol>
            <li>Suspension: Kubitsuri High School por Nisio, Isin</li>
            <li>Suspension: Kubitsuri High School por Nisio, Isin</li>
            <li>Suspension: Kubitsuri High School por Nisio, Isin</li>
            <li>Suspension: Kubitsuri High School por Nisio, Isin</li>
            <li>Suspension: Kubitsuri High School por Nisio, Isin</li>
          </ol>
        </Box>
      </TopFictionList>
    </Container>
  );
};

export default RightContent;
