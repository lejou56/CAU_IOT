var Person = function (name) {
    this.name = name;
};
Person.prototype.getName = function() {
    return this._name;
};

var suzi = new Person('Suzi');
// suzi,_proto_.getName();

Person.prototype === suzi.__proto__