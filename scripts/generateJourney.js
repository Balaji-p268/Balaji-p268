const fs = require("fs");
const path = require("path");

const profile = require("../config/profile.json");
const hero = require("./sprite");

module.exports = function () {

const locations = [
    {
        title: "HTML Village",
        x: 120,
        color: "#E34F26",
        icon: "🏠"
    },
    {
        title: "CSS Forest",
        x: 260,
        color: "#1572B6",
        icon: "🌳"
    },
    {
        title: "JavaScript City",
        x: 400,
        color: "#F7DF1E",
        icon: "🏙"
    },
    {
        title: "React Temple",
        x: 540,
        color: "#61DAFB",
        icon: "⛩"
    },
    {
        title: "Node Kingdom",
        x: 680,
        color: "#3C873A",
        icon: "🏰"
    },
    {
        title: "Docker Harbor",
        x: 820,
        color: "#2496ED",
        icon: "🚢"
    },
    {
        title: "Cloud Summit",
        x: 960,
        color: "#7C3AED",
        icon: "☁"
    },
    {
        title: "AI Citadel",
        x: 1100,
        color: "#10B981",
        icon: "🤖"
    }
];

const heroLevel =
    Math.min(
        Math.max(profile.level,1),
        locations.length
    );

const heroPosition =
    locations[heroLevel-1].x;

let nodes = "";
let labels = "";

locations.forEach((place,index)=>{

const unlocked = index < heroLevel;

const fill = unlocked
    ? place.color
    : "#30363D";

nodes += `
<circle
cx="${place.x}"
cy="170"
r="16"
fill="${fill}"
stroke="#FFFFFF"
stroke-width="2"/>
`;

labels += `
<text
x="${place.x-55}"
y="220"
fill="#C9D1D9"
font-size="15"
font-family="Segoe UI">

${place.icon} ${place.title}

</text>
`;

});

const svg = `
<svg
xmlns="http://www.w3.org/2000/svg"
width="1200"
height="320">

<defs>

<linearGradient
id="bg"
x1="0%"
y1="0%"
x2="100%"
y2="100%">

<stop
offset="0%"
stop-color="#0D1117"/>

<stop
offset="100%"
stop-color="#161B22"/>

</linearGradient>

</defs>

<rect
width="1200"
height="320"
fill="url(#bg)"/>

<rect
x="40"
y="30"
width="1120"
height="250"
rx="24"
fill="#161B22"
stroke="#30363D"
stroke-width="2"/>

<text
x="70"
y="75"
fill="white"
font-size="28"
font-family="Segoe UI"
font-weight="bold">

Developer Journey

</text>

<line
x1="120"
y1="170"
x2="1100"
y2="170"
stroke="#30363D"
stroke-width="8"/>

${nodes}

<image
href="./avatar.png"
x="${heroPosition-30}"
y="100"
width="60"
height="60"/>

${labels}
</svg>
`;

    fs.writeFileSync(
        path.join(
            __dirname,
            "../assets/developer-journey.svg"
        ),
        svg
    );

    console.log("🗺 Premium developer-journey.svg generated");

};