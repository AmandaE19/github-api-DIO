import React from "react";
import * as St from "./styled";

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <St.Wrapper>
      <St.WrapperTitle>{name}</St.WrapperTitle>
      <St.WrapperFullName>full name:</St.WrapperFullName>
      <St.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </St.WrapperLink>
    </St.Wrapper>
  );
};

export default RepositoryItem;
