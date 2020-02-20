import React from "react";
import styled from "styled-components";
import ProfileDetails from "../ProfileDetails";
import Logo from "../../static/not_hack_the_north.png";
import { Props } from "./index";

const ProfileCardContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  position: relative;
  background-color: #070a1c;
  border-radius: 10px;

  opacity: 0.95;
`;

const TopBackground = styled.div`
  width: 100%;
  height: 25%;
  background-color: #070a1c;
  border-bottom: 1px solid #1bd6bd;
  border-opacity: 0.5;
`;

const ProfileImage = styled.img`
  position: absolute;
  top: 90px;
  cursor: pointer;

  border-radius: 50%;
  width: 200px;
  height: 200px;
  &:hover {
    box-shadow: 0px 4px 8px #1bd6bd;
    width: 202px;
    height: 202px;
  }
`;

const ProfileCard = ({ profile, requestProfile }: Props) => {
  return (
    <ProfileCardContainer>
      <TopBackground />
      <ProfileImage
        src={profile ? profile.profile_pic : Logo}
        alt={""}
        id={"logo"}
        onClick={() => requestProfile()}
      />
      <ProfileDetails profile={profile} requestProfile={requestProfile} />
    </ProfileCardContainer>
  );
};

export default ProfileCard;
