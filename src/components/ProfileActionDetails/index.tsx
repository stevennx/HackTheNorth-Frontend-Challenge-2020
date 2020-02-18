import React from "react";
import styled from "styled-components";

const ProfileActionsContainer = styled.div`
    margin-top: 20px; 
    text-align: center;
`

const ActionButton = styled.button`
    display: inline-block;
    width: 60%;
    height: 30px;
`

const ProfileActionDetails = () => (
    <ProfileActionsContainer>
        <ActionButton>
            {`Some Action`}
        </ActionButton>
    </ProfileActionsContainer>
);

export default ProfileActionDetails;