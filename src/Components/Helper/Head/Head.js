import React, { useEffect } from "react";

const Head = ({ title, description }) => {
  useEffect(() => {
    document.title = title + "| Dogs";
    document
      .querySelector("meta[name='description]")
      .setAttribute("content", description || "");
  }, [description, title]);

  return <></>;
};

export default Head;
