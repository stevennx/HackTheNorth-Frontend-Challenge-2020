import React from "react";
import styled from "styled-components";

type Props = {
  phoneNumber: string;
  canCallNumber: boolean;
};

const SponsorContainer = styled.div`
  > span,
  a {
    line-height: 22px;
    color: #1bd6bd;
  }
`;

const PhoneNumberLabel = styled.a`
  text-decoration: underline;
  cursor: pointer;
`;

const PhoneComponent = ({ phoneNumber, canCallNumber }: Props) => {
  const formatPhoneNumber = (phoneNumberString: string) => {
    const cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return match[1] + "-" + match[2] + "-" + match[3];
    }
    return null;
  };

  return (
    <SponsorContainer>
      <span>
        {`Slide into our DMs @ `}
        <PhoneNumberLabel>{formatPhoneNumber(phoneNumber)}</PhoneNumberLabel>
      </span>
    </SponsorContainer>
  );
};

export default PhoneComponent;
