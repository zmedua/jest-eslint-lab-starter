const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe ('capitalizeWords', () => 
    {
        test('capitalizes each word in a string', () => {
            expect(capitalizeWords('hello world')).toBe('Hello World')
            expect(capitalizeWords('')).toBe('')
            expect(capitalizeWords('hello-world')).toBe('Hello-world')
            expect(capitalizeWords('hello')).toBe('Hello')
            expect(capitalizeWords('multiple   spaces')).toBe('Multiple   Spaces')
        })
    })

describe('filterActiveUsers', () => {
    test('filters out inactive users', () => {
        const users = [
            { name: 'Alice', active: true },
            { name: 'Bob', active: false },
            { name: 'Charlie', active: true }
        ]
        const activeUsers = filterActiveUsers(users)
        expect(activeUsers).toEqual([
            { name: 'Alice', active: true },
            { name: 'Charlie', active: true }
        ])
        expect(activeUsers).not.toContainEqual({ name: 'Bob', active: false })
    })
})
describe(filterActiveUsers, () => {
    test('returns an empty array if no users are active', () => {
        const users = [
            { name: 'Alice', active: false },
            { name: 'Bob', active: false }
        ]
        const activeUsers = filterActiveUsers(users)
        expect(activeUsers).toEqual([])
    })
})

describe('logAction', () => {
    test('logs the action to the console', () => {
        console.log = jest.fn()
        logAction('Test action')
        expect(console.log).toHaveBeenCalledWith('Action logged: Test action')
    })
})
describe('logAction', () => {
    test('returns error emty strings', () => {
        expect(generateLog('', '')).toBe('User  performed  at ' + new Date().toISOString())
    })
})

describe('returns error if username is missing', () => {
    test('returns error if username is missing', () => {
        expect(logAction('Test action', '')).toBe('User  performed Test action at ' + new Date().toISOString())
    })
})

describe('returns error if action is missing', () => {
    test('returns error if action is missing', () => {
        expect(logAction('', 'TestUser')).toBe('User TestUser performed  at ' + new Date().toISOString())
    })
})  