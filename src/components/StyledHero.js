import styled from "styled-components";
import defaultImg from "../images/room-1.jpeg";

// Styled components are one of the new ways to use CSS in modern JavaScrip. It is the meant to be a successor of CSS module,
// a new way to write CSS that's scoped to a single component and not leak to any other element in the page

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${(props) => (props.img ? props.img : defaultImg)})
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
