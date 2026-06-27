const fs = require("fs");
const path = require("path");

const profile = require("../config/profile.json");

module.exports = function () {

    let y = 90;
    let achievements = "";

    profile.achievements.forEach((achievement) => {

        const bgColor = achievement.unlocked ? "#238636" : "#21262D";
        const border = achievement.unlocked ? "#2EA043" : "#30363D";
        const textColor = achievement.unlocked ? "#FFFFFF" : "#8B949E";

        achievements += `

<rect
x="40"
y="${y-30}"
width="520"
height="45"
rx="10"
fill="${bgColor}"
stroke="${border}"
stroke-width="2"/>

<text
x="60"
y="${y}"
fill="${textColor}"
font-size="18"
font-family="Segoe UI"
font-weight="600">

${achievement.icon} ${achievement.title}

</text>

<text
x="470"
y="${y}"
fill="${textColor}"
font-size="15"
font-family="Segoe UI">

${achievement.unlocked ? "Unlocked" : "Locked"}

</text>

`;

        y += 60;

    });

    const svg = `
<svg xmlns="http://www.w3.org/2000/svg"
     width="600"
     height="460"
     viewBox="0 0 600 460">

<defs>

<linearGradient id="bg"
x1="0%"
y1="0%"
x2="100%"
y2="100%">

<stop offset="0%" stop-color="#0D1117"/>
<stop offset="100%" stop-color="#161B22"/>

</linearGradient>

</defs>

<rect
width="600"
height="460"
fill="url(#bg)"/>

<rect
x="20"
y="20"
width="560"
height="420"
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

Achievements

</text>

${achievements}

</svg>
`;

    fs.writeFileSync(
        path.join(__dirname, "../assets/achievements.svg"),
        svg
    );

    console.log("🏆 Premium achievements generated");

};