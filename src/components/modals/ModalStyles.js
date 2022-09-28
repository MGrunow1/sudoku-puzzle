import styled from "styled-components";

export const CloseButton = styled.button`
margin: 3px;
padding: 5px 40px;
min-width: 30px;
`;

export const ModalBackground = styled.div`
border: 10px solid transparent; /* for clicking to close */
position: absolute;
z-index: 2;
top: ${(props) => props.top || "0px"};
`;

export const NumberButton = styled.button`
margin: 3px;
padding: 5px;
min-width: 30px;
`;

export const NumberChooser = styled.div`
position: relative;
${(props) => props.css};
z-index: 4;
border: 1px solid var(--border-color);
border-radius: 8px;
background-color: var(--modal-back-color);
padding: 2px;
display: flex;
flex-flow: row wrap;
justify-content: space-around;
max-width: 150px;
`;
