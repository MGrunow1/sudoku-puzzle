import styled from "styled-components";

export const CellButton = styled.button`
margin: 0%;
background-color: var(--cell-back-color);
border: 1px solid var(--border-color);
border-radius: 0%;
width: 2.3rem;
height: 2.3rem;
padding: 3px;
font-size: 1.3em;
color: var(--fore-color);
${(props) => props.disabled
  ? `font-weight: bold;`
  : ``
}
`;

export const FlexRow = styled.div`
display: flex;
flex-direction: row;
`;

export const ThickBorder = styled.div`
border: 3px solid var(--border-color);
width: fit-content;
position: relative;
@media (max-width: 700px) {
  border-width: 2px
}
`;
