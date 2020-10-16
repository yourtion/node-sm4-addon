const os = require('os');

const addon = os.platform() === "darwin" ? require("./libs/mac") : require("./libs/linux");

function encrypt(key, data) {
  return addon.crypt(0, key, data);
}
function decrypt(key, data) {
  return addon.crypt(1, key, data);
}

module.exports = { encrypt, decrypt };

