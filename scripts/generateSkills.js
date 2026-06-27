const fs = require("fs");
const path = require("path");

const profile = require("../config/profile.json");

module.exports = function () {

    let y = 95;
    let cards = "";

    Object.entries(profile.skills).forEach(([skill, level]) => {

        const barWidth = level * 40;

        cards += `

<text
x="70"
y="${y}"
fill="#FFFFFF"
font-size="18"
font-family="Segoe UI"
font-weight="600">

${skill}

</text>

<rect
x="220"
y="${y-14}"
width="220"
height="12"
rx="6"
fill="#30363D"/>

<rect
x="220"
y="${y-14}"
width="${barWidth}"
height="12"
rx="6"
fill="#58A6FF"/>

<text
x="460"
y="${y-2}"
fill="#8B949E"
font-size="14"
font-family="Segoe UI">

${level}/5

</text>

`;

        y += 42;

    });

    const svg = `
<svg xmlns="http://www.w3.org/2000/svg"
     width="560"
     height="470"
     viewBox="0 0 560 470">

<defs>

<linearGradient id="bg"
x1="0%"
y1="0%"
x2="100%"
y2="100%">

<stop offset="0%" stop-color="#0D1117"/>

<stop offset="100%" stop-color="#161B22"/>

</linearGradient>

<linearGradient id="skillBar"
x1="0%"
y1="0%"
x2="100%"
y2="0%">

<stop offset="0%" stop-color="#58A6FF"/>

<stop offset="100%" stop-color="#2EA043"/>

</linearGradient>

</defs>

<rect
width="560"
height="470"
fill="url(#bg)"/>

<rect
x="20"
y="20"
width="520"
height="430"
rx="18"
fill="#161B22"
stroke="#30363D"
stroke-width="2"/>

<text
x="40"
y="55"
fill="#FFFFFF"
font-size="28"
font-family="Segoe UI"
font-weight="bold">

Skills Dashboard

</text>

${cards}

</svg>
`;

    fs.writeFileSync(
        path.join(__dirname, "../assets/skills.svg"),
        svg
    );

    console.log("⚡ Premium skills generated");

};