import React, { Children } from "react";
import { StyleText } from "./styles";
import { Text, View } from "react-native";

interface Props {
    children: string;
    marginTop?: number;
    fontSize?: number;
    color?: string;
}

export function CustomText({ children, marginTop, fontSize, color }: Props) {
    return (
        <StyleText marginTop={marginTop} fontSize={fontSize} color={color}>
            {children}
        </StyleText>
    );
}
