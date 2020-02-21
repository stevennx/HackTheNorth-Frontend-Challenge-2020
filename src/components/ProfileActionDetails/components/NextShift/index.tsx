import React from "react";
import styled from "styled-components";
import moment from "moment";

type Props = {
    nextShift: number;
};

const SponsorContainer = styled.div`
  > span,
  a {
    line-height: 22px;
    color: #1bd6bd;
  }
`;

const NextShiftComponent = ({ nextShift }: Props) => {
    const date = moment(new Date(nextShift));
  return (
    <SponsorContainer>
      <span>{`Next Shift is at [${date.format('MMMM Do YYYY, h:mm:ss a')}]`}</span>
    </SponsorContainer>
  );
};

export default NextShiftComponent;
