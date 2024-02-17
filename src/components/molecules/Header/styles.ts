import styled from "styled-components/native";

export const CustomHeader = styled.View`
    margin-top: 32px;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 28px;
    padding-bottom: 20px;
    border-radius: 0 0 30px 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
`;

export const StyleImage = styled.Image`
    height: 42px;
    width: 42px;
`;

export const ViewTitle = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
`;

export const ViewIcons = styled.View`
    display: flex;
    flex-direction: row;
    gap: 12px;
`;
