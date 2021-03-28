export const getPath = (el) => {
    const firstElem = document.body;
    return getPathInner(firstElem, el);
}

const getPathInner = (parentElem, el) => {
    const parentElemName = parentElem.localName;

    const childName = constructElemName(parentElem, el);

    return `${parentElemName} > ${childName}`;
}

const reduceClassesToString = (classList) => [...classList].reduce((acc, className) => {return `${acc}.${className}`}, '');

const processChildren = (children, el) => {
    const indexOfElem = children.indexOf(el);

    if(indexOfElem > -1) {
        return `:nth-child(${indexOfElem + 1})`
    }

    return null;
}

const constructElemName = (parentElem, el) => {
    const children = [...parentElem.children];

    if(children.length > 1) {
        return  processChildren(children, el);
    } else {
        const child = children[0];
        let className = reduceClassesToString(child.classList);

        return `${child.localName}${className}`;
    }
}
