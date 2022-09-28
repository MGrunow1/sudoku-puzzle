import styled from "styled-components";

export const ButtonContainer = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-around;
max-width: 500px;
`;

/* Show button when screen will be
 large enough for that size grid */
export const ButtonHiddenOnMedium = styled.button`
display: none;
@media (min-width: 815px) {
    display: block
}`;

/* Show button when screen will be
 large enough for that size grid */
export const ButtonHiddenOnSmall = styled.button`
display: none;
@media (min-width: 635px) {
    display: block
}`;

/* Show button when screen will be
 large enough for that size grid */
export const ButtonHiddenOnVerySmall = styled.button`
display: none;
@media (min-width: 474px) {
    display: block
}`;

export const CenteredContainer = styled.div`
    display: flex;
    justify-content: center;`;
