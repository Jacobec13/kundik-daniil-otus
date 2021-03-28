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
})
