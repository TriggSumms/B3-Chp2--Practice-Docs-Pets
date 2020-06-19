//Lightning Exercise 1: Create an object representing a Doctor, function accepts 3 arguments

const realDoctorWithaPHD(name, speciality, practicingAddress) => {
    var proBONODoctor = {

        name: name, 
        speciality: speciality,
        practicingAddress: practicingAddress

    };
    console.log(proBONODoctor)
     return proBONODoctor;
}

let TEDDY = realDoctorWithaPHD("Teddy", "BoiWonder", "soupHouse");



//Lightning Ex 2: Same exercise but 2arguments and 3invokes inside an array named BowWowKennels

const myPet(name, breed) => {
    var createdPetObject = {

        name: name, 
        breed: breed

    };
    console.log(createdPetObject)
     return createdPetObject;
}
const BowWowKennels= (Tabitha, Ricky, lilboi)
let Tabitha = myPet("Tabitha", "snizzle");
let Ricky = myPet("ricky", "okdogo");
let lilBoi = myPet("lilBabi", "yeet");


