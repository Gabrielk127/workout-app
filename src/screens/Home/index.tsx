import { View, Text, ScrollView } from "react-native";
import { Header } from "../../components/molecules/Header";
import { CustomText } from "../../components/atoms/Text";
import { CustomHome, ViewMain, ViewCards } from "./styles";
import { TitleNav } from "../../components/molecules/TitleNav";
import { CardWorkout } from "../../components/organisms/CardWorkout";
import { CustomTabs } from "../../components/organisms/CustomTabs";

export function Home() {
    return (
        <>
            <Header />
            <ScrollView>
                <ViewMain>
                    <CustomHome>
                        <View>
                            <CustomText marginTop={24} fontSize={24}>
                                Olá, Gabriel
                            </CustomText>
                        </View>
                        <TitleNav title="Treinos" />
                    </CustomHome>
                    <ScrollView horizontal>
                        <ViewCards>
                            <CardWorkout
                                height={250}
                                width={250}
                                image={require("../../../assets/superior.webp")}
                                title="Superiores"
                                description="1h | intermediário"
                            />
                            <CardWorkout
                                height={250}
                                width={250}
                                image={require("../../../assets/legs.jpg")}
                                title="Perna"
                                description="1:30h | intermediário"
                            />
                            <CardWorkout
                                height={250}
                                width={250}
                                image={require("../../../assets/back.jpg")}
                                title="Costas"
                                description="1:20h | intermediário"
                            />
                            <CardWorkout
                                height={250}
                                width={250}
                                image={require("../../../assets/chest.jpg")}
                                title="Peito"
                                description="1h | intermediário"
                            />
                        </ViewCards>
                    </ScrollView>

                    <CustomHome>
                        <View>
                            <TitleNav title="Níveis de Treino" />
                            <CustomTabs />
                        </View>
                    </CustomHome>
                </ViewMain>
            </ScrollView>
        </>
    );
}
