# node-sm4-addon

Node.js SM4 Addon

## Usage

```javascript
const sm4 = require("@techs/sm4-addon");
const assert = require("assert");

const key = "1512691780427141";
const data = "%7B%22tranCode%22%3A%22tranCode_0%22%2C%22body%22%3A%7B%22time%22%3A%22374732%22%7D%7D";
const ret = "34b417a4f99b1343256089e64638f6a7061aa79ce88ad0efc12cf4886560fc7bc93f253e28538aa8b1bd236cdf99dcef5b2e2e5567aa9b06e035900c0d00ada59a68190b15d4a727ac47fb2420e476e7846be51a88e024324ba29ebad50502d9";
// 加密
const a = sm4.encrypt(key, data);

console.log(a);
assert(a === ret);
// 解密
const b = sm4.decrypt(key, a);
assert(b === data);
```