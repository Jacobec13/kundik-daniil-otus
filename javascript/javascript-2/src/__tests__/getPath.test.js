import {getPath} from '../getPath';

describe("getPath", () => {
    beforeEach(() => {
        document.body.innerHTML = '';
    })
    it("should return path for first child", () => {
        // given
        const expectedPath = 'body > div';

        const elementToFind = document.createElement('div');

        document.body.appendChild(elementToFind);
        // when
        const actualPath = getPath(elementToFind);
        // then
        expect(actualPath).toBe(expectedPath);
    });
    it("should return class element if it is has it", () => {
        // given
        const expectedPath = 'body > div.test_class.test_class_2';

        const elementToFind = document.createElement('div');
        elementToFind.classList.add('test_class')
        elementToFind.classList.add('test_class_2')

        document.body.appendChild(elementToFind);
        // when
        const actualPath = getPath(elementToFind);
        // then
        expect(actualPath).toBe(expectedPath);
    });
    it("should return class element if there is two elements", () => {
        // given
        const expectedPath = 'body > :nth-child(2)';

        document.body.innerHTML = '<div></div>';

        const elementToFind = document.createElement('div');

        document.body.appendChild(elementToFind);
        // when
        const actualPath = getPath(elementToFind);
        // then
        expect(actualPath).toBe(expectedPath);
    });
    it("should build path for deep element", () => {
        // given
        const expectedPath = 'body > div > div';
        document.body.innerHTML = '<div id="parent"></div>'

        const elementToFind = document.createElement('div');

        document.getElementById("parent").appendChild(elementToFind);
        // when
        const actualPath = getPath(elementToFind);
        // then
        expect(actualPath).toBe(expectedPath);
    });
})
