import React from "react";
import styled from "styled-components";

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children?: any;
}
const Container = styled.div`
    width: 400px;
    height: 550px;
    background: #4d3585;
    padding: 40px 20px;
`


const CardContainer: React.FC<Props> = ({children}) => (
    <Container>
        {children}
    </Container>
)

export default CardContainer; 