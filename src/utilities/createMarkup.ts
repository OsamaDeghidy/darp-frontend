export const createMarkup = (content: string) => {
    const hasStyleAttribute = /style="[^"]*"/gm.test(content);
    if (hasStyleAttribute) {
        const cleanContent = content.replace(/style="[^"]*"/gm, '');
        return {__html: cleanContent};
    }
    return {__html: content};
}

export const createMarkupArticle = (content: string) => {
    return {__html: content};
}