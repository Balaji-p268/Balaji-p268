const fs = require("fs");
const path = require("path");

const profile = require("../config/profile.json");

module.exports = function () {

    const progressWidth = Math.floor((profile.xp / profile.maxXp) * 500);

    const svg = `
<svg xmlns="http://www.w3.org/2000/svg"
     width="1200"
     height="300">

<rect width="1200" height="300" fill="#0D1117"/>

<text
x="60"
y="80"
fill="white"
font-size="48"
font-family="Segoe UI"
font-weight="bold">

${profile.name}

</text>

<text
x="60"
y="130"
fill="#58A6FF"
font-size="24">

${profile.title}

</text>

<text
x="60"
y="170"
fill="#8B949E"
font-size="18">

${profile.subtitle}

</text>

<rect
x="60"
y="220"
width="500"
height="12"
rx="6"
fill="#30363D"/>

<rect
x="60"
y="220"
width="${progressWidth}"
height="12"
rx="6"
fill="#58A6FF"/>

<text
x="580"
y="230"
fill="#C9D1D9"
font-size="16">

Level ${profile.level}

</text>

</svg>
`;

    fs.writeFileSync(
        path.join(__dirname, "../assets/banner.svg"),
        svg
    );

    console.log("🎨 banner.svg generated");
};