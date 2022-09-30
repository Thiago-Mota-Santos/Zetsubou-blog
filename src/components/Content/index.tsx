import React from "react";
import Card from "../Card";

import { Container } from "./styles";

const Content: React.FC = () => {
  return (
    <Container>
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <Card
            key={n}
            img_url={"https://w.wallhaven.cc/full/m9/wallhaven-m9g5xm.png"}
            title={"Analise de desenho ruim que otário hypa"}
            subtitle={"by Th | Apr 23, 2022 | Review"}
            description={"babababbabababbabababababababababababababababba"}
          />
        ))}
      </div>
    </Container>
  );
};

export default Content;
