import styled from "styled-components";

export const SearchBox = styled.input`
  width: 100%;
  border: none;
  border-radius: 20px;
  font-size: ${(props) => props.theme.fonts.fontSize.regular};
  outline: none;
  padding: 15px 25px;
`;