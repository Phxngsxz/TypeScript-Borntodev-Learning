var Human = /** @class */ (function () {
    function Human() {
        this.name = '';
        this.lastname = '';
        this.age = 0;
    }
    Human.prototype.sayHello = function () {
        return "Hello ! I'm " + this.name + " and " + this.age + " years old.";
    };
    return Human;
}());
var user1 = new Human();
user1.name = 'Phongsaphon somsin';
user1.age = 20;
console.log(user1.sayHello());
