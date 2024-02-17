import styled from "styled-components/native";
import { View } from "react-native";

interface CustomSize {
    width?: number;
    height?: number;
}

export const CustomCard = styled(View)<CustomSize>`
    width: ${({ width }) => (width ? `${width}px` : "200px")};
    height: ${({ height }) => (height ? `${height}px` : "200px")};
    border-radius: 22px;
    overflow: hidden;
    background-color: #ffb600;
`;

export const CustomPressable = styled.Pressable``;

export const CustomImage = styled.Image`
    width: ${({ width }) => (width ? `${width}px` : "200px")};
    height: ${({ height }) => (height ? `${height}px` : "200px")};
    border-radius: 22px;
`;

export const CustomTitle = styled.Text`
    color: #ffb600;
    font-weight: bold;
    font-size: 20px;
`;

export const CustomDescription = styled.Text`
    color: #fff;
    font-size: 14px;
    margin-bottom: 5px;
`;

export const CustomTexts = styled.View`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;
