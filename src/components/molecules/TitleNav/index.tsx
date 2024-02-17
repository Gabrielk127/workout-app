import React from "react";
import { CustomTitleNav } from "./styles";
import { CustomText } from "../../atoms/Text";
import { Pressable } from "react-native";

interface titleNavProps {
    title: string;
}

export const TitleNav = ({ title }: titleNavProps) => {
    return (
        <CustomTitleNav>
            <CustomText marginTop={22} fontSize={16}>
                {title}
            </CustomText>
            <Pressable>
                <CustomText marginTop={22} fontSize={16} color="#FFB600">
                    Ver todos
                </CustomText>
            </Pressable>
        </CustomTitleNav>
    );
};
