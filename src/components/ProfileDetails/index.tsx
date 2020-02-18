import React from "react";
import styled from "styled-components";
import ProfileActionDetails from "../ProfileActionDetails";

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

const ProfileDetails = () => (
  <ProfileDetailsContainer>
    <NameIDContainer>
      <NameContainer>Name: {"Feridun Hamdullahpur"}</NameContainer>
      <IDContainer>{190258281}</IDContainer>
    </NameIDContainer>
    <BioContainer>
      <BioParagraph>
        {`A veteran of the hackathon scene, Feridun takes them on with a nonchalant
         approach to building a project. You can find him on reddit posting memes 
         about himself before starting his project hours before the deadline. 
         Yet somehow, he almost always places as a finalist ¯\\_(ツ)_/¯`}
      </BioParagraph>
    </BioContainer>
    <StatusContainer>Checked In: {false}</StatusContainer>
    <ProfileActionDetails />
  </ProfileDetailsContainer>
);

export default ProfileDetails;
