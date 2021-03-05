import React, { useState } from "react";

import * as S from "./style";

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  const handleLoad = ({ target }) => {
    setSkeleton(false);
    target.style.opacity = 1;
  };

  return (
    <S.Wrapper>
      {skeleton && <S.Skeleton></S.Skeleton>}
      <img onLoad={handleLoad} alt="" {...props} />
    </S.Wrapper>
  );
};

export default Image;
