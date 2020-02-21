import React, { useState } from "react";
import styled from "styled-components";

type Props = {
  hasAction: boolean;
  numWorkshops: number;
};

const WorkshopContainer = styled.div`
  > span {
    float: left;
  }
  > div {
    float: right;
  }
`;

const WorkshopLabel = styled.span`
  color: #1bd6bd;
  line-height: 30px;
`;

const ButtonContainer = styled.div``;

const Button = styled.button`
  background-color: #1bd6bd;
  text-align: center;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;

  :first-child {
    margin-right: 10px;
  }
`;

const ButtonText = styled.span`
  display: inline-block;
  color: #070a1c;
`;

const WorkShopComponent = ({ hasAction, numWorkshops }: Props) => {
  const [countWorkshops, setCountWorkshops] = useState<number>(numWorkshops);
  return (
    <WorkshopContainer>
      <WorkshopLabel>{`Workshops Attended: ${countWorkshops}`}</WorkshopLabel>
      {hasAction && (
        <ButtonContainer>
          {countWorkshops > 0 && (
            <Button onClick={() => setCountWorkshops(countWorkshops - 1)}>
              <ButtonText>-</ButtonText>
            </Button>
          )}

          <Button onClick={() => setCountWorkshops(countWorkshops + 1)}>
            <ButtonText>+</ButtonText>
          </Button>
        </ButtonContainer>
      )}
    </WorkshopContainer>
  );
};

export default WorkShopComponent;
