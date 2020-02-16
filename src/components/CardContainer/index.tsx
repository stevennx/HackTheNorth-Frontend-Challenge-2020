import React from "react";
import styled from "styled-components";

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children?: any;
}
const Container = styled.div`
    width: 600px;
    height: 600px;
    background: white;
`


const CardContainer: React.FC<Props> = ({children}) => (
    <Container>
        {children}
    </Container>
)

export default CardContainer; 