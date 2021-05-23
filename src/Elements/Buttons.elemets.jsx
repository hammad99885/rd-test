import styled from "styled-components";
import { Link as DomLink } from "react-router-dom";

const LinkEle = (props) => <DomLink {...props}>{props.children}</DomLink>;

export const Link = styled(LinkEle)`
  text-decoration: none;
  color: ${(props) =>
    props.color
      ? props.theme.colors.text[props.color]
        ? props.theme.colors.text[props.color]
        : props.color
      : props.theme.colors.text.dark};
  &:hover {
    text-decoration: none;
    color: ${(props) =>
      props.colorHover
        ? props.theme.colors.text[props.colorHover]
          ? props.theme.colors.text[props.colorHover]
          : props.colorHover
        : props.theme.colors.text.dark};
  }
`;

export const Button = styled.button`
  color: ${(props) =>
    !props.outlined
      ? props.color
        ? props.theme.colors.text[props.color]
          ? props.theme.colors.text[props.color]
          : props.color
        : props.theme.colors.text.light
      : props.bgColor
      ? props.theme.colors.bg[props.bgColor]
        ? props.theme.colors.bg[props.bgColor]
        : props.bgColor
      : props.theme.colors.bg.primary};
  padding: ${(props) => (props.padding ? props.padding : "5px")};
  background-color: ${(props) =>
    !props.outlined
      ? props.bgColor
        ? props.theme.colors.bg[props.bgColor]
          ? props.theme.colors.bg[props.bgColor]
          : props.bgColor
        : props.theme.colors.bg.primary
      : "transparent"};
  font-weight: bolder;
  border: ${(props) =>
    props.outlined
      ? `1px solid ${
          props.bgColor
            ? props.theme.colors.bg[props.bgColor]
              ? props.theme.colors.bg[props.bgColor]
              : props.bgColor
            : props.theme.colors.bg.primary
        }`
      : "none"};
  border-radius: 8px;
`;
