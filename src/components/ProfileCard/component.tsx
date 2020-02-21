import React, { useEffect } from "react";
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
  border: 6px solid #5bd7ff;
`;

const TopBackground = styled.div`
  width: 100%;
  height: 160px;
  background-color: #070a1c;
  border-bottom: 6px solid #5bd7ff;
  border-opacity: 0.5;
`;

const ProfileImage = styled.img`
  position: absolute;
  top: 55px;
  cursor: pointer;
  border: 6px solid #5bd7ff;

  border-radius: 50%;
  width: 200px;
  height: 200px;
  &:hover {
    width: 202px;
    height: 202px;
  }
`;

const ProfileCard = ({ profile, requestProfile }: Props) => {
  useEffect(() => {
    requestProfile();
  }, [requestProfile]);
  return (
    <ProfileCardContainer>
      <TopBackground />
      <ProfileImage
        src={profile ? profile.profile_pic : Logo}
        alt={""}
        id={"logo"}
        onClick={() => requestProfile()}
      />
      {profile && <ProfileDetails profile={profile} />}
    </ProfileCardContainer>
  );
};

export default ProfileCard;
