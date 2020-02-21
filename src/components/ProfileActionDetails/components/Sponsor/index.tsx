import React from "react";
import styled from "styled-components";

type Props = {
  companyName: string;
  companyUrl: string;
};

const SponsorContainer = styled.div`
  > span, a {
    line-height: 22px;
    color: #1bd6bd;
  }
`;

const SponsorLink = styled.a`=
  cursor: pointer;
`;


const SponsorComponent = ({ companyName, companyUrl }: Props) => {
  return (
    <SponsorContainer>
      <span>Check us out @ </span>
      <SponsorLink href={companyUrl} target={"_blank"}>{companyName}</SponsorLink>
    </SponsorContainer>
  );
};

export default SponsorComponent;
