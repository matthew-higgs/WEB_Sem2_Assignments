const building = {
    address: "1234 Crystal St.",
    city: "Indianapolis",
    state: "IN",
    floors: 2,
    fullAddress: function() {
        return this.address + this.city + this.state;
    }
};

console.log(building.address);
console.log(building.city);
console.log(building.state);
console.log(building.floors);
console.log(building.fullAddress);