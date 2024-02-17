import styled from "styled-components/native";
import { TextProps } from "react-native";

interface CustomTextProps extends TextProps {
    color?: string;
    marginTop?: number;
    fontSize?: number;
}

export const StyleText = styled.Text<CustomTextProps>`
    color: ${({ color }) => color || "#000"};
    font-size: ${({ fontSize }) => `${fontSize}px` || "24px"};
    font-weight: bold;
    margin-top: ${({ marginTop }) => `${marginTop}px` || "24px"};
`;
