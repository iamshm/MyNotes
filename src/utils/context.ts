import { createContext } from "react";
import {} from "./colors";
export type IData = {
    id: string;
    heading: string;
    subText: string;
    backGroundColor: string;
    isFav?: boolean;
};
export type IContextType = {
    name: string;
    data: IData[];
    updateContext: (obj: any) => void;
    loading?: boolean;
};
export const InitialAppData: IContextType = {
    name: "",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateContext: obj => null,
    data: [],
    loading: false,
};
export const AppContext = createContext<IContextType>(InitialAppData);
