const person = {
    first: "John",
    last: "Doe",
    id: 1234,
    fullName: () => {
        return this.first + " " + this.last;
    }
};

console.log(person.first);
console.log(person.last);
console.log(person.id);
console.log(person.fullName);

person.first = "Mark"
person.last = "Barnes"
console.log(person.first);
console.log(person.last);
console.log(person.id);
console.log(person.fullName());