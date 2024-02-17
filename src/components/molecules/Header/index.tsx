import React from "react";
import { CustomHeader, StyleImage, ViewTitle, ViewIcons } from "./styles";
import { CustomText } from "../../atoms/Text";
import { Image, View } from "react-native";
import { BellRinging, BookmarkSimple } from "phosphor-react-native";

export const Header = () => {
    return (
        <CustomHeader>
            <ViewTitle>
                <StyleImage source={require("../../../../assets/logo.png")} />
                <CustomText marginTop={0} fontSize={16}>
                    Workout App
                </CustomText>
            </ViewTitle>
            <ViewIcons>
                <BellRinging color="#000" size={32} />
                <BookmarkSimple color="#000" size={32} />
            </ViewIcons>
        </CustomHeader>
    );
};
