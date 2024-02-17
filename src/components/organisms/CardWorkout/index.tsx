import { Image } from "react-native";
import {
    CustomPressable,
    CustomImage,
    CustomTitle,
    CustomDescription,
    CustomTexts,
    CustomCard,
} from "./styles";

interface CardProps {
    link?: string;
    image?: number;
    title?: string;
    description?: string;
    width?: number;
    height?: number;
}

export function CardWorkout({
    link,
    image,
    title,
    description,
    width,
    height,
}: CardProps) {
    return (
        <CustomCard width={width} height={height}>
            <CustomPressable>
                {image && (
                    <CustomImage source={image} width={width} height={height} />
                )}
                <CustomTexts>
                    <CustomTitle>{title}</CustomTitle>
                    <CustomDescription>{description}</CustomDescription>
                </CustomTexts>
            </CustomPressable>
        </CustomCard>
    );
}
