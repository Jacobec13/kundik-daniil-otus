export const getPath = (el) => {
    const firstElem = document.body;
    return getPathInner(firstElem, el);
}

const getPathInner = (parentElem, el) => {
    const parentElemName = parentElem.localName;
    const children = [...parentElem.children];

    return `${parentElemName} > ${children[0].localName}`
}
