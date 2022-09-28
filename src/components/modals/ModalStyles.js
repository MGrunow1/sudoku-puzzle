import styled from "styled-components";

export const NumberButton = styled.button`
margin: 3px;
padding: 5px;
min-width: 30px;
`;

export const NumberChooser = styled.div`
position: absolute;
z-index: 2;
border: 1px solid var(--border-color);
border-radius: 8px;
background-color: var(--modal-back-color);
padding: 2px;
display: flex;
flex-flow: row wrap;
justify-content: space-around;
max-width: 120px;
`;
