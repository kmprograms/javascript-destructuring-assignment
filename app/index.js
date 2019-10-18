// ---------------------------------------------------------------------------
// rozbijanie tablic
// ---------------------------------------------------------------------------

const arr = [10, 20, 30, 40, 50];

const [a, b] = arr;
console.log(`a = ${a} b = ${b}`);

const [aa,,,bb] = arr;
console.log(`aa = ${aa} bb = ${bb}`);

const [x, y, ...elements] = arr;
console.log(`x = ${x} y = ${y}`);
console.log(elements.join(', '));

// ---------------------------------------------------------------------------
// rozbijanie prostych obiektow
// ---------------------------------------------------------------------------
const car = {
    model: 'BMW',
    speed: 230
};

const {model, speed} = car;
console.log(`MODEL = ${model} SPEED = ${speed}`);
const {model: carModel, speed: carSpeed} = car;
console.log(`MODEL = ${carModel} SPEED = ${carSpeed}`);


// ---------------------------------------------------------------------------
// nadpisywanie wartosci istniejacych zmiennych
// ---------------------------------------------------------------------------
let country = 'Poland';
let firstname = 'Adam';
let lastname = 'Nowak';

const tourist = {
    firstname: 'Piotr',
    lastname: 'Kowal',
    country: 'UK'
};

({ firstname, lastname } = tourist);
console.log(`FIRSTNAME = ${firstname}`);
console.log(`LASTNAME = ${lastname}`);
console.log(`COUNTRY = ${country}`);

// ---------------------------------------------------------------------------
// rozbijanie obiektow zagniezdzonych
// ---------------------------------------------------------------------------
const player = {
    name: 'Andy',
    goals: 33,
    team: {
        name: 'The Reds',
        points: 11
    }
};

function displayPlayerInfo({ name = 'player name', goals = 0, team: { name: teamName = 'team name', points: teamPoints = 0 } }) {
    console.log(`Player name: ${name}`);
    console.log(`Player goals: ${goals}`);
    console.log(`Team name: ${teamName}`);
    console.log(`Team points: ${teamPoints}`);
}
displayPlayerInfo(player);

// ---------------------------------------------------------------------------
// rozbijanie obiektow z zagniezdzonymi obiektami i tablicami
// ---------------------------------------------------------------------------
const company = {
    name: 'PROG-CO',
    year: 2000,
    location: {
        country: 'Poland',
        city: 'Warsaw',
        coordinates: [52.237049, 21.017532]
    }
};
const {name, year, location: {country: companyCountry, city, coordinates: [lat, lng]}} = company;
console.log(`NAME = ${name}`);
console.log(`YEAR = ${year}`);
console.log(`COUNTRY = ${companyCountry}`);
console.log(`CITY = ${city}`);
console.log(`LAT = ${lat}`);
console.log(`LNG = ${lng}`);
