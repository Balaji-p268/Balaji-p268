const fs = require("fs");
const path = require("path");

const profile = require("../config/profile.json");

module.exports = function () {

    let y = 80;
    let cards = "";

    profile.achievements.forEach((achievement) => {

        const color = achievement.unlocked ? "#58A6FF" : "#8B949E";

        cards += `
<text
x="60"
y="${y}"
fill="${color}"
font-size="22"
font-family="Segoe UI">

${achievement.icon} ${achievement.title}

</text>
`;

        y += 45;

    });

    const svg = `
<svg xmlns="http://www.w3.org/2000/svg"
width="600"
height="400">

<rect
width="600"
height="400"
fill="#0D1117"/>

<text
x="50"
y="40"
fill="white"
font-size="30"
font-family="Segoe UI"
font-weight="bold">

Achievements

</text>

${cards}

</svg>
`;

    fs.writeFileSync(
        path.join(__dirname, "../assets/achievements.svg"),
        svg
    );

    console.log("🏆 achievements.svg generated");

}