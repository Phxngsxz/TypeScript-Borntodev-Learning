function sayHello(name, lastname) {
    if (name === void 0) { name = "None"; }
    if (lastname === void 0) { lastname = "Nome"; }
    return name + " " + lastname;
}
function sum(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (a, b) { return a + b; }, 0);
}
function add(_a) {
    var x = _a.x, y = _a.y;
    return x + y;
}
console.log("Hello " + sum(1, 2, 3, 4, 5));
