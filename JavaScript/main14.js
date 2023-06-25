class Person
{
    constructor(name, age, isHappy)
    {
        this.name = name;
        this.age = age;
        this.isHappy = isHappy;
    }

    info()
    {
        console.log('Имя: '+ this.name + '\nВозраст: ' + this.age)
    }
}

var alex = new Person('Alex', 21, true);
var bob = new Person('Bob', 21, false);
alex.info();