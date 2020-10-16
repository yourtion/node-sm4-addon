const os = require('os');
const addon = os.platform() === "darwin" ? require("./libs/mac") : require("./libs/linux");

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

