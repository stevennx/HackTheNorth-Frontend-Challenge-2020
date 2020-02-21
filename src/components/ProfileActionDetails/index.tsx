import React from "react";
import styled from "styled-components";
import WorkShopComponent from "./components/Workshop";
import { AttendeeProfile } from "../../redux/modules/Profile/types";
import SponsorComponent from "./components/Sponsor";
import PhoneComponent from "./components/Phone";
import NextShiftComponent from "./components/NextShift"

type Props = {
  profile: AttendeeProfile;
};

const ProfileActionsContainer = styled.div`
  margin-top: 8px;
  text-align: center;
  span, a {
    font-weight: 600 !important;
    font-size: 16px;
  }
`;

const ProfileActionDetails = ({ profile }: Props) => (
  <ProfileActionsContainer>
    {profile.num_workshops_attended && (
      <WorkShopComponent
        numWorkshops={profile.num_workshops_attended}
        hasAction={!!profile.actions.find(action => action === "attend_workshop")}
      />
    )}
    {profile.sponsor_company && <SponsorComponent companyName={profile.sponsor_company} companyUrl={profile.sponsor_company_link as string} />}
    {profile.phone_number && <PhoneComponent phoneNumber={profile.phone_number} canCallNumber={!!profile.actions.find(action => action === "call_phone")}/>}
    {profile.next_shift && <NextShiftComponent nextShift={profile.next_shift}/>}
  </ProfileActionsContainer>
);

export default ProfileActionDetails;
