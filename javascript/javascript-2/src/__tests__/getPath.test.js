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
    })
})
