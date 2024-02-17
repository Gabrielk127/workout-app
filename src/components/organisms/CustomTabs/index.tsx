import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
    TabsContainer,
    TabButton,
    TabButtonText,
    TabContent,
    CustomCards,
} from "./styles";
import { CardWorkout } from "../CardWorkout";

interface TabData {
    label: string;
    content: React.ReactNode;
}

interface TabsProps {
    data: TabData[];
}

const Tabs: React.FC<TabsProps> = ({ data }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <View>
            <TabsContainer>
                {data.map((tab, index) => (
                    <TabButton
                        key={index}
                        active={activeTab === index}
                        onPress={() => setActiveTab(index)}
                    >
                        <TabButtonText active={activeTab === index}>
                            {tab.label}
                        </TabButtonText>
                    </TabButton>
                ))}
            </TabsContainer>
            <TabContent>
                {data.map((tab, index) => (
                    <View
                        key={index}
                        style={{
                            display: activeTab === index ? "flex" : "none",
                        }}
                    >
                        {tab.content}
                    </View>
                ))}
            </TabContent>
        </View>
    );
};

export function CustomTabs() {
    const data = [
        {
            label: "Inciante",
            content: (
                <CustomCards>
                    <CardWorkout
                        width={330}
                        height={130}
                        image={require("../../../../assets/superior.webp")}
                        title="Abdominal"
                        description="15min | iniciante"
                    />
                    <CardWorkout
                        width={330}
                        height={130}
                        image={require("../../../../assets/superior.webp")}
                        title="Abdominal"
                        description="15min | iniciante"
                    />
                    <CardWorkout
                        width={330}
                        height={130}
                        image={require("../../../../assets/superior.webp")}
                        title="Abdominal"
                        description="15min | iniciante"
                    />
                </CustomCards>
            ),
        },
        {
            label: "Intermediário",
            content: (
                <CustomCards>
                    <CardWorkout
                        width={330}
                        height={130}
                        image={require("../../../../assets/back.jpg")}
                        title="Costas"
                        description="15min | iniciante"
                    />
                    <CardWorkout
                        width={330}
                        height={130}
                        image={require("../../../../assets/back.jpg")}
                        title="Costas"
                        description="15min | iniciante"
                    />
                    <CardWorkout
                        width={330}
                        height={130}
                        image={require("../../../../assets/back.jpg")}
                        title="Costas"
                        description="15min | iniciante"
                    />
                </CustomCards>
            ),
        },
        {
            label: "Avançado",
            content: (
                <CustomCards>
                    <CardWorkout
                        width={330}
                        height={130}
                        image={require("../../../../assets/legs.jpg")}
                        title="Pernas"
                        description="15min | iniciante"
                    />
                    <CardWorkout
                        width={330}
                        height={130}
                        image={require("../../../../assets/legs.jpg")}
                        title="Pernas"
                        description="15min | iniciante"
                    />
                    <CardWorkout
                        width={330}
                        height={130}
                        image={require("../../../../assets/legs.jpg")}
                        title="Pernas"
                        description="15min | iniciante"
                    />
                </CustomCards>
            ),
        },
    ];

    return <Tabs data={data} />;
}
