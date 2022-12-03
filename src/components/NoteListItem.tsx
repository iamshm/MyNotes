import { RoutesEnum } from "../utils/constant";
import LeftNote from "../atoms/note/LeftNote";
import RightNote from "../atoms/note/RightNote";
import WideNote from "../atoms/note/WideNote";
import { useNavigation } from "@react-navigation/native";

type IProps = {
    index: number;
    data: any;
    backGroundColor: string;
};
const NoteListItem = (props: IProps) => {
    const { index, data } = props;
    const navigation = useNavigation<any>();
    const handleNotePress = () => {
        navigation.navigate(RoutesEnum.NOTE_SCREEN, {
            id: data.id,
        });
    };
    const getLayout = () => {
        if ((index + 1) % 4 === 1) {
            return (
                <LeftNote
                    text={data.heading}
                    subText={data.subText}
                    handleNotePress={handleNotePress}
                    isFav={data.isFav}
                    backGroundColor={data.backGroundColor}
                />
            );
        } else if ((index + 1) % 4 === 2) {
            return (
                <RightNote
                    handleNotePress={handleNotePress}
                    isFav={data.isFav}
                    text={data.heading}
                    subText={data.subText}
                    backGroundColor={data.backGroundColor}
                />
            );
        } else if ((index + 1) % 4 === 3) {
            return (
                <WideNote
                    handleNotePress={handleNotePress}
                    isFav={data.isFav}
                    text={data.heading}
                    subText={data.subText}
                    backGroundColor={data.backGroundColor}
                />
            );
        } else {
            return null;
        }
    };
    return getLayout();
};
export default NoteListItem;
