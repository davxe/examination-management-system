
const validatePhoneNumber = require('validate-phone-number-node-js');
const result = validatePhoneNumber.validate('+');
console.log(result)