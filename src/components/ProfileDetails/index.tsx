import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileActionDetails from "../ProfileActionDetails";
import { Props } from "../ProfileCard";

const ProfileDetailsContainer = styled.div`
  width: 100%;
  height: 50%;
  margin-top: 130px;
  padding: 0 50px;

  display: flex;
  flex-flow: column wrap;

  div,
  span {
    font-weight: 500;
  }
`;

const NameContainer = styled.span`
  float: left;
  font-size: 36px;
  color: #1bd6bd;
  line-height: 36px;
`;

const TypeIdContainer = styled.div`
  margin-top: 8px;
  span {
    color: white;
    font-size: 16px;
    line-height: 22px;
    font-weight: 600;
    opacity: 0.7;
  }
`;

const TypeContainer = styled.span`
  float: left;
  letter-spacing: 1.5px;
`;

const IDContainer = styled.span`
  float: right;
`;

const BioContainer = styled.div`
  margin: 20px 0;
  max-height: 150px;
  overflow: scroll;
`;

const BioParagraph = styled.p`
  color: #8a9eb2;
  font-size: 14px;
  letter-spacing: 0.16px;
  line-height: 24px;
  height: 100%;
  margin: 0;
`;

const StatusContainer = styled.div`
  font-size: 12px;
  color: white;
`;

const ProfileDetails = ({ profile, requestProfile }: Props) => {
  const [checkedIn, setCheckIn] = useState<boolean>((profile && profile.checked_in) || false);

  useEffect(() => {
    requestProfile();
    // eslint-disable-next-line
  }, []);

  return (
    <ProfileDetailsContainer>
      <NameContainer>{profile && profile.name}</NameContainer>
      <TypeIdContainer>
        <TypeContainer>{profile && profile.type.toUpperCase()}</TypeContainer>
        <IDContainer>{profile && profile.id}</IDContainer>
      </TypeIdContainer>
      <BioContainer>
        <BioParagraph>{profile && profile.bio}</BioParagraph>
      </BioContainer>
      <StatusContainer>
        Checked In: {`${checkedIn}`}
      </StatusContainer>
      <ProfileActionDetails />
    </ProfileDetailsContainer>
  );
};

export default ProfileDetails;
