import React from "react";
import { TouchableOpacity } from "react-native";
import NoteTemplate from "./Note";
import { noteStyles } from "./styles";

const RightNote = ({
    text,
    subText,
    backGroundColor,
    isFav,
    handleNotePress,
}: {
    text: string;
    subText: string;
    backGroundColor: string;
    isFav: boolean;
    handleNotePress: () => void;
}) => {
    return (
        <TouchableOpacity
            onPress={handleNotePress}
            style={[{ backgroundColor: backGroundColor }, noteStyles.note, noteStyles.tallNote, noteStyles.rightNote]}>
            <NoteTemplate isFav={isFav} text={text} subText={subText} />
        </TouchableOpacity>
    );
};
export default RightNote;
