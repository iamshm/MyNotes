import React, { useContext } from "react";
import { FlatList } from "react-native";
import { AppContext } from "../utils/context";
import { colors } from "../utils/colors";
import NoteListItem from "./NoteListItem";

const NotesList = () => {
    const { data: contextData } = useContext(AppContext);
    const getBgColor = (index: number) => {
        return colors.palette[index % colors.palette.length];
    };
    const renderItem = ({ item, index }: { item: any; index: number }) => (
        <NoteListItem index={index} data={item} backGroundColor={getBgColor(index)} />
    );
    return <FlatList numColumns={2} data={mutateArray(contextData)} renderItem={renderItem} />;
};
export default NotesList;

const mutateArray = (arr: any[]) => {
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        if (index >= arr.length) {
            break;
        }
        newArr.push(arr[index]);
        if (index + 1 >= arr.length) {
            break;
        }
        newArr.push(arr[index + 1]);
        if (index + 2 >= arr.length) {
            break;
        }
        newArr.push(arr[index + 2]);
        newArr.push({});

        index = index + 2;
    }
    return newArr;
};
