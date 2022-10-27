import React, { ReactHTML } from "react";
import {
  PageDocument,
  PostsDocument,
  PostsQuery,
  PostsQueryVariables,
  usePageQuery,
  usePostsQuery,
} from "../../generated/graphql";

import Card from "../Card";

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
