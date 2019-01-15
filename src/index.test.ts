import insert from './'

describe('String Insert Multiple', () => {

  test('Single insert op in the middle', () => {
    const input = 'aabbcc'
    const operations = [
        { at: 2, text: '11' },
    ]
    const expectedOutput = 'aa11bbcc'
    const output = insert(input, operations)
    expect(output).toEqual(expectedOutput)
  })

  test('Single insert op at the beginning', () => {
    const input = 'aabbcc'
    const operations = [
        { at: 0, text: '11' },
    ]
    const expectedOutput = '11aabbcc'
    const output = insert(input, operations)
    expect(output).toEqual(expectedOutput)
  })

  test('Single insert op at the end', () => {
    const input = 'aabbcc'
    const operations = [
        { at: 6, text: '11' },
    ]
    const expectedOutput = 'aabbcc11'
    const output = insert(input, operations)
    expect(output).toEqual(expectedOutput)
  })

  test('Single insert op at negative offset', () => {
    const input = 'aabbcc'
    const operations = [
        { at: -2, text: '11' },
    ]
    const expectedOutput = 'aabb11cc'
    const output = insert(input, operations)
    expect(output).toEqual(expectedOutput)
  })

  test('Single insert op beyond the string length', () => {
    const input = 'aabbcc'
    const operations = [
        { at: 10, text: '11' },
    ]
    const expectedOutput = 'aabbcc11'
    const output = insert(input, operations)
    expect(output).toEqual(expectedOutput)
  })

  test('Insert empty string', () => {
    const input = 'aabbcc'
    const operations = [
        { at: 2, text: '' },
    ]
    const expectedOutput = 'aabbcc'
    const output = insert(input, operations)
    expect(output).toEqual(expectedOutput)
  })

  test('Multiple sorted inserts', () => {
    const input = 'aabbcc'
    const operations = [
        { at: 2, text: '11' },
        { at: 4, text: '22' },
    ]
    const expectedOutput = 'aa11bb22cc'
    const output = insert(input, operations)
    expect(output).toEqual(expectedOutput)
  })

  test('Multiple unsorted inserts', () => {
    const input = 'aabbcc'
    const operations = [
        { at: 4, text: '22' },
        { at: 2, text: '11' },
    ]
    const expectedOutput = 'aa11bb22cc'
    const output = insert(input, operations)
    expect(output).toEqual(expectedOutput)
  })

})
