import React from "react";
import Post from "../../components/Post";
import RightContent from "../../components/RightContent";

import { Container, Wrapper } from "./slugstyle";

const slug: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Post />
        <RightContent />
      </Wrapper>
    </Container>
  );
};

export default slug;
