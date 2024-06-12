var extendClass3 = function (SuperClass, SubClass, subMethods) {
    SubClass.prototype = Object.create(SuperClass.prototype);
    SubClass.prototype.constructor = SubClass;
    var Bridge = function () {};
    if (subMethods) {
        for (var method in subMethods) {
            SubClass.prototype[method] = subMethods[method];
        }
    }
    Object.freeze(Square.prototype);
    return SubClass;
};