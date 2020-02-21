import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileActionDetails from "../ProfileActionDetails";
import Switch from "react-switch";
import { AttendeeProfile } from "../../redux/modules/Profile/types";
import { requestProfile } from "../../redux/modules/Profile/actions";

type Props = {
  profile: AttendeeProfile;
};

const ProfileDetailsContainer = styled.div`
  width: 100%;
  height: 50%;
  margin-top: 120px;
  margin-bottom: auto;
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
  color: #0e7c9f;
  line-height: 36px;
  font-weight: 600 !important;
`;

const TypeIdContainer = styled.div`
  margin-top: 12px;
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
  margin: 16px 0 8px 0;
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
  padding-right: 16px;
`;

const CheckedInContainer = styled.div`
  margin-bottom: 16px;
  > div {
    float: right;
  }
`;

const CheckedInText = styled.span`
  font-size: 18px;
  color: #5bd7ff;
  line-height: 30px;
  float: left;
  font-weight: 600 !important;
`;

const ProfileDetails = ({ profile }: Props) => {
  const [checkedIn, setCheckIn] = useState<boolean>(
    profile.checked_in || false
  );

  useEffect(() => {
    setCheckIn(profile.checked_in || false);
  }, [profile])

  return (
    <ProfileDetailsContainer>
      <NameContainer>{profile.name}</NameContainer>
      <TypeIdContainer>
        <TypeContainer>{profile.type.toUpperCase()}</TypeContainer>
        <IDContainer>{profile.id}</IDContainer>
      </TypeIdContainer>
      <BioContainer>
        <BioParagraph>{profile.bio}</BioParagraph>
      </BioContainer>

      <CheckedInContainer>
        <CheckedInText>{checkedIn ? "Checked In " : "Check In "}</CheckedInText>
        <Switch
          checked={checkedIn}
          onChange={() => setCheckIn(!checkedIn)}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-switch"
          id="material-switch"
          disabled={!profile.actions.find(action => action === "check_in")}
        />
      </CheckedInContainer>
      <ProfileActionDetails profile={profile} />
    </ProfileDetailsContainer>
  );
};

export default ProfileDetails;
