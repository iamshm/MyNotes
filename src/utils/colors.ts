export const colors = {
    black: "black",
    white: "white",
    palette: ["#f7d44c", "#eb7a53", "#98b7db", "#a8d672", "#f6ecc9"],
};

export const generateRandomColor = (): string => {
    return colors.palette[Math.floor(Math.random() * colors.palette.length)];
};
