import React, { useState } from "react";
import { Wrapper, Skeleton } from "./style";

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  const handleLoad = ({ target }) => {
    setSkeleton(false);
    target.style.opacity = 1;
  };

  return (
    <Wrapper>
      {skeleton && <Skeleton></Skeleton>}
      <img onLoad={handleLoad} alt="" {...props} />
    </Wrapper>
  );
};

export default Image;
