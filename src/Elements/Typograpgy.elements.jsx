import styled from "styled-components";

export const P = styled.p`
  color: ${(props) =>
    props.color
      ? props.theme.colors.text[props.color]
        ? props.theme.colors.text[props.color]
        : props.color
      : props.theme.colors.text.dark};
`;

export const Span = styled.span`
  color: ${(props) =>
    props.color
      ? props.theme.colors.text[props.color]
        ? props.theme.colors.text[props.color]
        : props.color
      : props.theme.colors.text.dark};
`;

export const H3 = styled.h3`
  color: ${(props) =>
    props.color
      ? props.theme.colors.text[props.color]
        ? props.theme.colors.text[props.color]
        : props.color
      : props.theme.colors.text.dark};
`;
