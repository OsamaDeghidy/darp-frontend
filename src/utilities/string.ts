export const getString = (value?: string): string => {
    if (value) {
        return ` ${value} `;
    } else {
        return ' ';
    }
};