const { decryptMarvelKeys } = require('../index');

jest.mock('../secrets.json', () => ({
    marvel: 'U2FsdGVkX1+DffD7kSWIWap9OUTzTQL7Cifc/CMbz5Q='
}), { virtual: true })

test('Returns a decrypted message', () => {
    const expectedResponse = 'testando123'

    expect(decryptMarvelKeys('123456')).toBe(expectedResponse);
});