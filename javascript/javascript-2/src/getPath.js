export const getPath = (el) => {
    const firstElem = document.body;
    return getPathInner(firstElem, el);
}

const getPathInner = (parentElem, el) => {
    const parentElemName = parentElem.localName;
    const children = [...parentElem.children];

    const child = children[0];
    let className = reduceClassesToString(child.classList);

    return `${parentElemName} > ${child.localName}${className}`
}

const reduceClassesToString = (classList) => [...classList].reduce((acc, className) => {return `${acc}.${className}`}, '')
