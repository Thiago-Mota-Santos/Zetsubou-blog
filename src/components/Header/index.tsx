import Link from "next/link";
import React from "react";

import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link href={"/"}>
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link href={"/posts"}>
            <a>posts</a>
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default Header;
