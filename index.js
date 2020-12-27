const os = require('os');
const addon = require(`./libs/${os.platform()}`);

function encrypt(key, data) {
  if(!key || !data) {
    throw new Error("params error");
  }
  return addon.crypt(0, key, data);
}

function decrypt(key, data) {
  if(!key || !data) {
    throw new Error("params error");
  }
  return addon.crypt(1, key, data);
}

module.exports = { encrypt, decrypt };

