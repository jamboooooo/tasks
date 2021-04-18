let start = {
    firstname: 'Джамбулат',
    lastname: 'Эбиев',
    city: 'Ахкинчу-Барзой',
    age: 20,
    heigth: 174,
    heigthMeters: 1.74,
    born: 2000,
    haveCar: false,
    carName: undefined,
    haveSkills: true,
    level: 10, //со всей скромностью
    mobilePhone: {
        nameModel: 'Redmi note 10pro',
        price: 25000,
        operator: 'megafone',
        company: 'Xiaomi'
    }
};

let galaxy = {
    fullname: 'Млечный Путь',
    type: 'Спиральная галактика с перемычкой',
    diameter: 100000,
    thickness: 3000,
    stars: undefined,
    solarSystem: true,
    age: 13200000000,
    mass: 4.8 * 1011,
    distanceSunCenter: 26000,
    planetSolar: {
        earth: true,
        venus: true,
        saturn: true,
        pluto: null
    }
};

delete galaxy.distanceSunCenter
console.log(galaxy)

let student = {
    firstname: 'Арби',
    lastname: 'Исламов',
    city: 'grozny'
};

student.age = 25;
console.log(student)