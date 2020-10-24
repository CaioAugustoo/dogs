import React from "react";
import { Wrapper, Skeleton } from "./style";

const Image = ({ alt, ...props }) => {
  return (
    <Wrapper>
      <Skeleton></Skeleton>
      <img alt="" {...props} />
    </Wrapper>
  );
};

export default Image;
