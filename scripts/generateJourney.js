const fs = require("fs");
const path = require("path");
const profile = require("../config/profile.json");
const hero = require("./sprite");
const positions = {
    1: 130,
    2: 300,
    3: 470,
    4: 640,
    5: 810,
    6: 980
};

const heroX = positions[profile.level] || 130;

module.exports = function () {

const svg = `
<svg xmlns="http://www.w3.org/2000/svg"
     width="1200"
     height="260">

<rect width="1200" height="260" fill="#0D1117"/>

<text
x="40"
y="45"
font-size="32"
fill="white"
font-family="Segoe UI"
font-weight="bold">

Developer Journey

</text>

<line
x1="120"
y1="130"
x2="1080"
y2="130"
stroke="#30363D"
stroke-width="6"/>

<circle cx="150" cy="130" r="12" fill="#58A6FF"/>
<circle cx="320" cy="130" r="12" fill="#58A6FF"/>
<circle cx="490" cy="130" r="12" fill="#58A6FF"/>
<circle cx="660" cy="130" r="12" fill="#58A6FF"/>
<circle cx="830" cy="130" r="12" fill="#30363D"/>
<circle cx="1000" cy="130" r="12" fill="#30363D"/>

<text x="120" y="170" fill="white" font-size="16">HTML</text>
<text x="295" y="170" fill="white" font-size="16">CSS</text>
<text x="430" y="170" fill="white" font-size="16">JavaScript</text>
<text x="640" y="170" fill="white" font-size="16">React</text>
<text x="810" y="170" fill="#8B949E" font-size="16">Node.js</text>
<text x="980" y="170" fill="#8B949E" font-size="16">AI</text>

${hero(heroX - 20,105)}

</svg>
`;

fs.writeFileSync(
path.join(__dirname,"../assets/developer-journey.svg"),
svg
);

console.log("🗺 developer-journey.svg generated");

}