import { classNames } from '../classNames/classNames'

describe('classNames', () => {
    test('with only one param', () => {
        expect(classNames('someClass', [])).toBe('someClass')
    })
    test('with additional class', () => {
        const expected = 'someClass class1 class2'
        expect(classNames('someClass', ['class1', 'class2'], {}))
            .toBe(expected)
    })
    test('with additional class and mods', () => {
        const expected = 'someClass class1 class2 mod1 mod3'
        expect(classNames(
            'someClass',
            ['class1', 'class2'],
            { mod1: true, mod2: false, mod3: true },
        )).toBe(expected)
    })
    test('with additional class and mods', () => {
        const expected = 'someClass class1 class2 mod1'
        expect(classNames(
            'someClass',
            ['class1', 'class2'],
            { mod1: true, mod2: false, mod3: undefined },
        )).toBe(expected)
    })
})
