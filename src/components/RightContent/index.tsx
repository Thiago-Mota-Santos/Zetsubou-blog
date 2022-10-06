import React from "react";

import { Container, SearchForm, TopFictionList } from "./styles";

const RightContent: React.FC = () => {
  return (
    <Container>
      <SearchForm>
        <input placeholder="Search ..." />
        <button>Search</button>
      </SearchForm>
      <TopFictionList />
    </Container>
  );
};

export default RightContent;
