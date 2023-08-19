import Link from "next/link";
import React from "react";

import { HeaderMenu, Wrapper, NavMenu, LogoContainer, LogoImage } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderMenu>
  <Wrapper>
  <LogoContainer>
      <Link href="/">
      <LogoImage src="https://media.graphassets.com/xU10WhwGTTyjI7tlTwfr" width={28} height={28} alt="Zetsubou Blog logo"/>
      </Link>
      <Link href="/">
        Zetsubou Blog
      </Link>
    </LogoContainer>
    <NavMenu>
      <Link href="/blog">Posts</Link>
    </NavMenu>
  </Wrapper>
</HeaderMenu>
  );
};

export default Header;
