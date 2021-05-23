import styled from "styled-components";

export const Card = styled.div`
  background-color: ${(props) =>
    props.bgColor
      ? props.theme.colors.bg[props.bgColor]
        ? props.theme.colors.bg[props.bgColor]
        : props.bgColor
      : props.theme.colors.bg.dark};
  color: ${(props) =>
    props.color
      ? props.theme.colors.text[props.color]
        ? props.theme.colors.text[props.color]
        : props.color
      : props.theme.colors.text.light};
  border-radius: 10px;
  padding: 10px;
  width: 100%;
`;

export const Indicators = styled.div`
  color: ${(props) =>
    props.color
      ? props.theme.colors.text[props.color]
        ? props.theme.colors.text[props.color]
        : props.color
      : props.theme.colors.text.success};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CustomIcon = styled.span`
  color: ${(props) =>
    props.color
      ? props.theme.colors.text[props.color]
        ? props.theme.colors.text[props.color]
        : props.color
      : props.theme.colors.text.light};
  padding: ${(props) => (props.padding ? props.padding : "5px")};
  background-color: ${(props) =>
    props.bgColor
      ? props.theme.colors.bg[props.bgColor]
        ? props.theme.colors.bg[props.bgColor]
        : props.bgColor
      : "transparent"};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "5px"};
  font-size: ${(props) =>
    props.size
      ? props.theme.fonts.fontSize[props.size]
        ? props.theme.fonts.fontSize[props.size]
        : props.size
      : props.theme.fonts.fontSize.regular};
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  border-radius: 20px;
`;

export const Progress = styled.div`
  width: ${(props) => props.progress + "%"};
  background-color: ${(props) =>
    props.bgColor
      ? props.theme.colors.bg[props.bgColor]
        ? props.theme.colors.bg[props.bgColor]
        : props.bgColor
      : props.theme.colors.bg.primary};
  border-radius: 20px;
  height: 10px;
`;
