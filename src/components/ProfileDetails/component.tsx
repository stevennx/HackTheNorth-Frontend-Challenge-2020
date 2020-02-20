import React, { useEffect } from "react";
import styled from "styled-components";
import ProfileActionDetails from "../ProfileActionDetails";
import { Props } from "./index";

const ProfileDetailsContainer = styled.div`
  width: 100%;
  height: 50%;
  margin-top: 100px;
  padding: 0 50px;

  display: flex;
  flex-flow: column wrap;

  div,
  span {
    color: white;
    font-weight: 500;
  }
`;

const NameIDContainer = styled.div`
  span {
    font-size: 14px;
    line-height: 22px;
  }
`;
const NameContainer = styled.span`
  float: left;
`;

const IDContainer = styled.span`
  float: right;
`;

const BioContainer = styled.div`
  margin: 20px 0;
`;

const BioParagraph = styled.span`
  font-size: 12px;
`;

const StatusContainer = styled.div`
  font-size: 12px;
`;

const ProfileDetails = ({ profile, requestProfile }: Props) => {
    
  useEffect(() => {
    requestProfile();
    // eslint-disable-next-line
  }, []);

  return (
    <ProfileDetailsContainer>
      <NameIDContainer>
        <NameContainer>Name: {profile && profile.name}</NameContainer>
        <IDContainer>{profile && profile.id}</IDContainer>
      </NameIDContainer>
      <BioContainer>
        <BioParagraph>
          {profile && profile.bio}
        </BioParagraph>
      </BioContainer>
      <StatusContainer>Checked In: {`${profile && profile.checked_in}`}</StatusContainer>
      <ProfileActionDetails />
    </ProfileDetailsContainer>
  );
};

export default ProfileDetails;
