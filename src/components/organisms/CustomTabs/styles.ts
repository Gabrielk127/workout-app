import styled from "styled-components/native";

export const TabsContainer = styled.View`
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-around;
`;

export const TabButton = styled.TouchableOpacity<{ active: boolean }>`
    padding: 5px;
    border-bottom-width: ${(props) => (props.active ? "2px" : "0")};
    border-bottom-color: ${(props) => (props.active ? "#333" : "transparent")};
`;

export const TabButtonText = styled.Text<{ active: boolean }>`
    color: ${(props) => (props.active ? "#ffb600" : "#999")};
`;

export const TabContent = styled.View`
    padding-top: 20px;
`;

export const CustomCards = styled.View`
    display: flex;
    gap: 20px;
`;
