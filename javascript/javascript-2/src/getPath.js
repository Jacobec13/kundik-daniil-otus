export const getPath = (el) => {
    const firstElem = document.body;
    return getPathInner(firstElem, el);
}

const reduceClassesToString = (classList) => [...classList].reduce((acc, className) => {
    return `${acc}.${className}`
}, '');


const getPathInner = (current, el, elementNameOverride = undefined) => {
    const children = [...current.children];
    const currentName = getOneElementName(current, elementNameOverride)

    if (current === el) {
        return currentName;
    }

    if (children.length === 0) {
        return undefined;
    } else {
        if (children.length === 1) {
            const child = children[0];
            const childPath = getPathInner(child, el);
            if (childPath) {

                return `${currentName} > ${childPath}`;
            }
        }
    }

    const {index, subPath} = children.reduce((acc, child, currentIndex) => {
        if (acc.index === -1) {
            const childPath = getPathInner(child, el, `:nth-child(${currentIndex + 1})`);
            if (childPath) {
                return {
                    index: currentIndex,
                    subPath: childPath
                }
            }
        }
        return acc;
    }, {index: -1, subPath: undefined});

    if (index > -1) {
        return `${currentName} > ${subPath}`;
    }

    return undefined;
}

const getOneElementName = (el, elementNameOverride) => {
    if (elementNameOverride) {
        return elementNameOverride;
    }
    let className = reduceClassesToString(el.classList);

    return `${el.localName}${className}`;
}

window.testForBrowser = () => {
    document.body.innerHTML = ' <div> <div></div> <div><span></span></div> </div> <div> <div class="test_class_name" id="parent"></div> </div>';

    const element = document.createElement('div');
    element.classList.add('test_class_name');

    document.getElementById('parent').appendChild(element);

    const query = getPath(element);
    const queryResult = document.querySelectorAll(query);
    console.log(queryResult)
}
