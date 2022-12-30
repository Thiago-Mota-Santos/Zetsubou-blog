import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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

  const handleClick = () => setClick(!click);
  const handleCloseMenu = () => setClick(null);

  return (
    <Container>
      <MobileIcon onClick={handleClick} click={click}>
        {click ? <MenuIcon /> : <XIcon />}
      </MobileIcon>

      <NavMenu onClick={handleCloseMenu} click={click}>
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
