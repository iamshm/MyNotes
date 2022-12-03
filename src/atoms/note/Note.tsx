import React from "react";
import { Text, View } from "react-native";
import { noteStyles } from "./styles";
import Icon from "react-native-vector-icons/AntDesign";
Icon.loadFont().then();

const NoteTemplate = ({
    text,
    subText,
    noOfLines = 7,
    isFav = false,
}: {
    text: string;
    subText: string;
    noOfLines?: number;
    isFav: boolean;
}) => {
    return (
        <>
            <View style={noteStyles.lineContainer}>
                <View style={noteStyles.line1} />
                <View style={noteStyles.line2} />
            </View>
            <View style={noteStyles.textContainer}>
                <View style={noteStyles.textView}>
                    <Text numberOfLines={2} style={noteStyles.text}>
                        {text}
                    </Text>
                    <View style={noteStyles.circle}>
                        {isFav ? (
                            <Icon name={"heart"} size={20} color={"#db4f1c"} />
                        ) : (
                            <Icon name={"hearto"} size={20} color={"black"} />
                        )}
                    </View>
                </View>
                <Text numberOfLines={noOfLines} style={noteStyles.subText}>
                    {subText}
                </Text>
            </View>
        </>
    );
};

export default NoteTemplate;
