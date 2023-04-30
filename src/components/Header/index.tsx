import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Container, MenuIcon, MobileIcon, NavMenu, XIcon } from "./styles";

const Header: React.FC = () => {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("resize", showButton);
  }

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <Container>
      <MobileIcon onClick={handleClick}>
        {click ? <MenuIcon /> : <XIcon />}
      </MobileIcon>

      <NavMenu click={click}>
        <li>
          <Link href={"/"}>
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link href={"/blog"}>
            <a>posts</a>
          </Link>
        </li>
      </NavMenu>
    </Container>
  );
};

export default Header;
