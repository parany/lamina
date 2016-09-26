"use strict";
(function (PhoneNumberType) {
    PhoneNumberType[PhoneNumberType["Personal"] = 0] = "Personal";
    PhoneNumberType[PhoneNumberType["Business"] = 1] = "Business";
})(exports.PhoneNumberType || (exports.PhoneNumberType = {}));
var PhoneNumberType = exports.PhoneNumberType;
var PhoneNumber = (function () {
    function PhoneNumber() {
    }
    return PhoneNumber;
}());
exports.PhoneNumber = PhoneNumber;
//# sourceMappingURL=phone-number.js.map