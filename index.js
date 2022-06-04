const cryptoJs = require('crypto-js');
const secrets = require('./secrets.json')

function decryptMarvelKeys(secret) {
    const key = secrets.marvel;
    const code = cryptoJs.AES.decrypt(key, secret).toString(cryptoJs.enc.Utf8);
    return code;
}

const ntlSecretsManager = {
    decryptMarvelKeys
};

module.exports = ntlSecretsManager