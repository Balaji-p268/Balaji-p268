const fs = require("fs");
const path = require("path");

const profile = require("../config/profile.json");

module.exports = function () {

const svg = `
<svg xmlns="http://www.w3.org/2000/svg"
     width="900"
     height="380">

<rect width="900" height="380" fill="#0D1117"/>

<rect
x="20"
y="20"
width="860"
height="340"
rx="10"
fill="#161B22"/>

<text
x="40"
y="55"
fill="#58A6FF"
font-size="24"
font-family="Consolas">

Balaji@github:~$

</text>

<text x="40" y="100" fill="white" font-size="18">whoami</text>

<text x="40" y="130" fill="#58A6FF" font-size="18">${profile.name}</text>

<text x="40" y="180" fill="white" font-size="18">role</text>

<text x="40" y="210" fill="#58A6FF" font-size="18">${profile.title}</text>

<text x="40" y="260" fill="white" font-size="18">level</text>

<text x="40" y="290" fill="#58A6FF" font-size="18">${profile.level}</text>

</svg>
`;

fs.writeFileSync(
path.join(__dirname,"../assets/terminal.svg"),
svg
);

console.log("💻 terminal.svg generated");

}