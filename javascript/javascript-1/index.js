const convertArrayOfStringsToObject = (arrayOfStrings) => {
    return arrayOfStrings.reduce((acc, it) => {
        return {...acc, [it]: true}
    }, {})
}

const maxItemAssociation = (buyingList) => {
    const resultObject = buyingList.reduce((acc, buying) => {
        let result = {...acc};
        buying.forEach((it) => {
            const oneBuyingObj = convertArrayOfStringsToObject(buying);
            const currentBuyingObj = result[it];

            result = {
                ...result,
                [it]: {...currentBuyingObj, ...oneBuyingObj}
            }
        })

        return result
    }, {})

    return Object.values(resultObject).map((it) => {
        return Object.keys(it).sort()
    }).reduce((maxArray, currentArray) => {
        return maxArray.length < currentArray.length ? currentArray : maxArray
    }, [])
}

const arrayEquals = (a, b) => Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);

(() => {
    const testSuits = [
        [
            [["a", "b"], ["a", "c"], ["d", "e"]],
            ['a', 'b', 'c']
        ],
        [
            [["a", "b"], ["a", "c"], ["d", "e"], ["b", 'e', 'd']],
            ['a', 'b', 'e', 'd']
        ],
        [
            [["a", "b"], ["e", "c"]],
            ['a', 'b']
        ],
        [
            [],
            []
        ]
    ]

    testSuits.forEach((testSuit) => {
        const input = testSuit[0];
        const expectedResult = testSuit[1];

        const actualResult = maxItemAssociation(input)
        if(arrayEquals(actualResult, expectedResult)) {
            console.log("All good for ")
            console.log(input)
        } else {
            console.log("Test FAIL for input")
            console.log(input)
            console.log("Expected ")
            console.log(expectedResult)
            console.log('But got')
            console.log(actualResult)
        }
        console.log("--------------------")
    })
})()
