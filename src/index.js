const messages = [
    "daniel",
    "paula",
    "alejandra",
    "danielito",
    "wilbert",
    "susana",
    "maira",
    "berbardito",
    "amairani"
];

const randomMsg = ()=> {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}
module.exports = { randomMsg};