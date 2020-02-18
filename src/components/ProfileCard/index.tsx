import React from "react";
import styled from "styled-components";
import Logo from "../../static/not_hack_the_north.png";
import ProfileBackgroundImage from "../../static/profile_background.png";
import ProfileDetails from "../ProfileDetails";

const ProfileCardContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  position: relative;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 30%;
`;

const ProfileImage = styled.img`
  position: absolute;
  top: 100px;

  border-radius: 50%;
  width: 125px;
  height: 125px;
`;

const ProfileCard = () => {

  return (
    <ProfileCardContainer>
      <BackgroundImage src={ProfileBackgroundImage} alt={""} />
      <ProfileImage src={Logo} alt={""} />
      <ProfileDetails />
    </ProfileCardContainer>
  );
};

export default ProfileCard;
