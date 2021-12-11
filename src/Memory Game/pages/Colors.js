import styled from "styled-components";
export const Black = () => {
  return <Container bg="black"></Container>;
};
export const Red = () => {
  return <Container bg="red"></Container>;
};
export const Yellow = () => {
  return <Container bg="yellow"></Container>;
};
export const Green = () => {
  return <Container bg="green"></Container>;
};
export const Gray = () => {
  return <Container bg="grey"></Container>;
};
export const Purple = () => {
  return <Container bg="purple"></Container>;
};

const Container = styled.div`
  width: 300px;
  height: 300px;

  border-radius: 5px;
  background: ${({ bg }) => bg};
`;
