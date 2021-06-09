const { mapObjectToArray, getNewUser } = require('./myLib')

describe('getNewUser', () => {
  test('user does exist', async () => {
    const user = await getNewUser(1)

    expect(user).toBeTruthy()
    expect(user.verified).toBe(false)
  })

  test('user does not exist', async () => {
    expect.assertions(1)

    try {
      await getNewUser(3)
    } catch (e) {
      expect(e.message).toBe('User does not exist')
    }
  })
})

describe('mapObjectToArray', () => {
  test('callback gets called for each value', () => {
    const mock = jest.fn()

    mapObjectToArray({ a: 1, b: 1, c: 1 }, mock)
    expect(mock.mock.calls.length).toBe(3)
  })

  test('callback gets the right args', () => {
    const mockCb = jest.fn()
    const o = { a: 1, b: 1, c: 1 }

    mapObjectToArray(o, mockCb)
    const firstCall = mockCb.mock.calls[0]

    expect(firstCall[0]).toBe('a')
    expect(firstCall[1]).toBe(1)
    expect(firstCall[2]).toBe(o)
  })
})
