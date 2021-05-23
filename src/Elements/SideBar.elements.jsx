import styled from "styled-components";

export const SideBar = styled.aside`
  height: 100%;
  background: ${(props) => props.theme.colors.bg.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  border-radius: 28px;
`;

export const NavItem = styled.div`
  font-weight: bolder;
  text-align: center;
  /* margin-bottom: 20px; */
  color: ${(props) =>
    props.color
      ? props.theme.colors.text[props.color]
        ? props.theme.colors.text[props.color]
        : props.color
      : "#fff"};
  font-size: ${(props) =>
    props.size
      ? props.theme.fonts.fontSize[props.size]
        ? props.theme.fonts.fontSize[props.size]
        : props.size
      : "30px"};
`;

export const NavItemCollection = styled.div`
  margin: 25px 0;
  background-color: ${(props) => props.theme.colors.bg.darkOpac};
  width: 75%;
  color: ${(props) => props.theme.colors.bg.light};
  border-radius: 10px;
`;
