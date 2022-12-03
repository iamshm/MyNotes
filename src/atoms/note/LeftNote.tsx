import React from "react";
import { TouchableOpacity } from "react-native";
import NoteTemplate from "./Note";
import { noteStyles } from "./styles";

const LeftNote = ({
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
            style={[{ backgroundColor: backGroundColor }, noteStyles.note, noteStyles.tallNote, noteStyles.leftNote]}>
            <NoteTemplate text={text} subText={subText} isFav={isFav} />
        </TouchableOpacity>
    );
};

export default LeftNote;
